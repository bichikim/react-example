import {useCallback} from 'react'
import {AnyFunction} from '@/types'
import {useActRef} from './act-ref'

export const useHandle = <A extends any[] = any[], R = any>(
  callback?: AnyFunction<A, R>,
): AnyFunction<A, R> => {
  const callbackRef = useActRef<AnyFunction<A, R> | undefined>(callback)

  return useCallback((...args: A): any => {
    return callbackRef?.current?.(...args)
  }, [callbackRef])
}
