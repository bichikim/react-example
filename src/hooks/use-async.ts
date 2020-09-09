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

  const onChangeRef = useRef(onChange)
  onChangeRef.current = onChange

  useEffect(() => {
    Promise.resolve().then(() => value)
    .then((value) => {
      state.current = {
        ...state.current,
        error: null,
        value,
      }
      onChangeRef.current(state.current)
    }).catch((error) => {
      state.current = {
        ...state.current,
        error,
        value: null,
      }
      onChangeRef.current(state.current)
    })
  }, [value])
}
