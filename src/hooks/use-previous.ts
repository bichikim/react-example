import {useEffect, useRef} from 'react'

/**
 * get Previous value
 * @param value
 */
export const usePrevious = <S>(value: S): S => {
  const _value = useRef(value)

  useEffect(() => {
    _value.current = value
  }, [value])

  return _value.current
}
