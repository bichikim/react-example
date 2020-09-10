import {forwardRef, ForwardRefRenderFunction, PropsWithChildren} from 'react'
import {ComplexFunctionComponent} from './utils'

export const withForwardRef = <P extends Record<string, any>, T = any>(
  component: ComplexFunctionComponent<P, T>,
) => {
  const With = forwardRef<T, PropsWithChildren<P>>(
    component as ForwardRefRenderFunction<T, P>,
  )

  Object.assign(With, component)

  return With
}
