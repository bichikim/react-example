import {useRef, useState} from 'react'
import {produce} from 'immer'
import {callbackify} from 'src/utils'
import {useHandle} from './handle'

export type ImmerRecipe<S> = (draft: S) => any | Promise<any>

export type ImmerDispatch<S> = (recipe: ImmerRecipe<S>) => any

export type ImmerArgsRecipe<A extends any[]> = (draft, ...args: A) => any | Promise<any>

export const useImmerCallback = <S>(
  initState: S,
  callback?: (state: S) => any,
) => {
  const _state = useRef(initState)

  return  useHandle((recipe: ImmerRecipe<S>) => {
    callbackify<S>(() => produce(_state.current, recipe), (error, data) => {
      if (error || data === null) {
        return
      }
      _state.current = data
      // eslint-disable-next-line no-unused-expressions
      callback?.(data)
    })
  })
}

export const useImmer = <S>(initState: S) => {
  const [state, setState] = useState<S>(initState)

  const update = useImmerCallback(initState, setState)

  return [state, update]
}

export const useImmerHandle = <S, A extends any[]>(
  update: ImmerArgsRecipe<A>,
  dispatch: ImmerDispatch<S>,
): ((...args: A) => any) => {

  return useHandle((...args: A) => {
    dispatch((draft) => {
      update(draft, ...args)
    })
  })
}
