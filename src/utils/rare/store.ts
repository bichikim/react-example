import {useReactive} from './use-reactive'
import {produce} from 'immer'

// the S = state type

export type SetState<S> = (state: S) => any

export type Recipe<S> = (draft: S) => void

export type Subscribes<S> = (state: S) => any

export class Store<S> {
  state: S
  hooks: Map<SetState<S>, boolean> = new Map()
  subscribes: Map<Subscribes<S>, boolean> = new Map()
  options: StoreOptions

  constructor(state: S, options = {}) {
    this.state = {...state}
    this.options = options
  }

  registerHooks(setState: SetState<S>) {
    this.hooks.set(setState, true)
  }

  unRegisterHooks(setState: SetState<S>) {
    this.hooks.delete(setState)
  }

  mutate(draft: Recipe<S>) {
    this.setState(draft)
  }

  setState(draft: Recipe<S>) {
    const {lazy} = this.options
    const oldState = this.state
    const newState = produce(oldState, draft)

    // save new State
    this.state = newState

    if (lazy) {
      const time = typeof lazy === 'number' ? lazy : 0
      this.hooks.forEach((_, setState) => {
        setTimeout(() => {
          if (this.hooks.has(setState)) {
            setState(newState)
          }
        }, time)
      })
      return
    }

    // announce changed State
    this.hooks.forEach((_, setState) => {
      setState(newState)
    })
  }
}

export type useStore<S> = () => [S, (draft: Recipe<S>) => any]

export interface StoreOptions {
  lazy?: boolean | number
}

export const createStore = <S extends Record<string, any>>(state: S, options?: StoreOptions): {store: Store<S>, useStore: useStore<S>} => {
  const store = new Store<S>(state, options)
  return {
    store,
    useStore() {
      return useReactive(store.state, store)
    },
  }
}


