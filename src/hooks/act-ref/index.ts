import {useRef} from 'react'

export const useActRef = <T>(state: T) => {
  const stateRef = useRef<T>(state)
  stateRef.current = state

  return stateRef
}

