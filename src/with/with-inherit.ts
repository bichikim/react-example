import {AllComponentType, createCurryWith} from './utils'
import {filterProps, InheritInfo, InheritProps, useInherit, WITH_INHERIT_SYM} from 'src/hooks/use-inherit'

export const withInherit = <P extends Record<string, any>, T = any>(
  component: AllComponentType<P, T>,
  inherit?: string[] | InheritInfo,
) => createCurryWith<P, InheritProps, T>(
  component,
  {identifier: WITH_INHERIT_SYM, name: 'WithInherit'},
)(
  (props) => {
    const {children: _children, inheritProps: additionalProps, ...rest} = props
    const inheritProps = inherit ? filterProps(rest, inherit) : rest
    const children = useInherit({...inheritProps, inheritProps: additionalProps}, _children)
    return {...rest, children} as any
  },
)
