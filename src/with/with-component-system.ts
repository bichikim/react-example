import {ComplexFunctionComponent} from './utils'
import {withForwardRef} from './with-forward-ref'
import {withFlex} from './with-flex'
import {withInherit} from './with-inherit'

export const withComponentSystem = <P extends Record<string, any>, T = any>(
  component: ComplexFunctionComponent<P, T>) => {
  return withForwardRef(withInherit(withFlex<P, T>(component)))
}
