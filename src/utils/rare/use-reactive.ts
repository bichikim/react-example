import {useCallback, useEffect, useState} from 'react'
import {Recipe, Store} from './store'

export type Actor = (...args: any[]) => Promise<any> | any

export type UseReactive = <S>(state: S, store: Store<S>) => [S, (draft: Recipe<S>) => any]

export const useReactive = <S>(state: S, store: Store<S>): [S, (draft: Recipe<S>) => any] => {
  const [_state, _setState] = useState(state)
  const mutate = useCallback((draft: Recipe<S>) => {
    store.setState(draft)
  }, [store])

  useEffect(() => {
    store.registerHooks(_setState)
    return () => {
      store.unRegisterHooks(_setState)
    }
  }, [store])

  return [_state, mutate]
}
