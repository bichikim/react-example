import {useCallback} from 'react'

export type OnTransformChange = (value: any) => any
export type TransformFunc = (value: any) => any

export const useTransformFunc = (onchange?: OnTransformChange, transform?: TransformFunc) => {
  return useCallback((value: any) => {
    if (!onchange) {
      return
    }

    const newValue = transform ? transform(value) : value
    return onchange(newValue)
  }, [onchange, transform])
}
