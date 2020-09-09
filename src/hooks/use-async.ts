import {useEffect, useRef} from 'react'

export type OnChange = (value: AsyncState) => any

export interface AsyncState {
  error: any | null
  value: any | null
}

export const useAsync = (value: Promise<any> | any, onChange: OnChange) => {
  const state = useRef<AsyncState>({
    error: null,
    value: null,
  })
  useEffect(() => {
    Promise.resolve().then(() => value)
    .then((value) => {
      state.current = {
        ...state.current,
        error: null,
        value,
      }
      onChange(state.current)
    }).catch((error) => {
      state.current = {
        ...state.current,
        error,
        value: null,
      }
      onChange(state.current)
    })
  }, [value])
}
