import {createStore} from '@/utils/rare'
import React from 'react'

export default {
  title: 'tests/debounce-lazy',
}

const {store, useStore} = createStore({
  bar: 4,
  foo: {
    bar: 4,
  },
  john: 6,
}, {debounce: true})

const {useStore: useLazyStore} = createStore({
  foo: 5,
}, {debounce: 2000})

const addJohn = () => {
  store.setState((draft) => {
    draft.john += 1
  })
}

export const Default = () => {
  const [state, setState] = useStore()
  return (
    <div>
      <span>
        foo.bar:
        {state.foo.bar}
      </span>
      <span>|</span>
      <span>
        bar:
        {state.bar}
      </span>
      <span>|</span>
      <span>
        john
        {state.john}
      </span>
      <button onClick={() => (setState((draft) => {
        draft.foo.bar += 1
      }))}
      >
        add foo.bar
      </button>
    </div>

  )
}


export const Inner = () => {
  const setState = useStore()[1]

  return (
    <div>
      <button onClick={() => (setState((draft) => {
        draft.bar += 1
      }))}
      >
        add bar
      </button>
      <button onClick={addJohn}>add john</button>
    </div>
  )
}

export const LongLazy = () => {
  const [state, setState] = useLazyStore()

  return (
    <div>
      <span>{state.foo}</span>
      <button onClick={() => setState((draft) => {
        draft.foo += 1
      })}
      >
        add long foo
      </button>
    </div>
  )
}
