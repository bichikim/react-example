import {useCallback, useEffect, useMemo, useRef} from 'react'

export type OnAsyncChange = (value: AsyncState) => any
export type RequestState = 'idle' | 'error' | 'wait' | 'success'

export interface AsyncState {
  state: RequestState
  value: any | null
}

export const useAsync = (value: () => Promise<any> | any, onChange?: OnAsyncChange) => {

  const onChangeRef = useRef(onChange)
  onChangeRef.current = onChange

  // first state
  useMemo(() => {
    onChangeRef.current && onChangeRef.current({state: 'idle', value: null})
  }, [onChangeRef])

  const execute = useCallback(() => {
    onChangeRef.current &&
    onChangeRef.current({
      state: 'wait',
      value: null,
    })
    Promise.resolve().then(() => value())
      .then((value) => {
        onChangeRef.current &&
        onChangeRef.current({
          state: 'success',
          value,
        })
      })
      .catch((error) => {
        onChangeRef.current &&
        onChangeRef.current({
          state: 'error',
          value: error,
        })
      })
  }, [value, onChangeRef])

  useEffect(() => {
    execute()
  }, [execute])

  return execute
}
