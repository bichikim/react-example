import {omit, pick} from 'lodash'
import {ReactNode} from 'react'
import {useOverride} from './use-override'
import {useBaseType} from 'src/hooks/use-base-type'

export interface InheritInfo {
  omit?: string[]
  /**
   * pass 는 필터링 여부와 상관없이 자식의 자식 컨포넌트에 상속 할 props 를 정할 수 있습니다.
   * pass 가 지정 되더라도  inheritItems props 가 지정되어 있어야 실제로 자식의 자식으로 props 상속 할 수 있습니다.
   */
  pass?: boolean | string[]
  pick?: string[]
}

export interface InheritParentProps {
  inheritItems?: boolean | string[] | InheritInfo
  /**
   * 자식에게 넘기고 싶은 props 가 있지만 나 자신에게는 적용 하고 싶지 않을 때 사용 합니다.
   */
  inheritProps?: Record<string, any>
}

export interface InheritChildProps {
  forceInherit?: boolean
  inherit?: boolean | string[] | InheritInfo
}

export type InheritProps = InheritChildProps & InheritParentProps

export const WITH_INHERIT_SYM = Symbol('with-inherit')

export const filterProps = (props: Record<string, any>, filter: string[] | InheritInfo | boolean = {}) => {
  if (typeof filter !== 'object') {
    return {...props}
  }

  const _pick = Array.isArray(filter) ? filter : filter.pick

  const _omit = Array.isArray(filter) ? undefined : filter.omit

  const inheritProps = _pick ? pick(props, _pick) : props

  return _omit ? omit(inheritProps, _omit) : inheritProps
}

const propsMerger = (overrideProps, childProps) => {

  const {inherit, forceInherit = false, ...rest} = childProps

  const pass = typeof inherit === 'object' ? inherit.pass ?? false : false

  let $pass = {}

  if (pass) {
    // pass inherit level props filter
    $pass = filterProps(overrideProps, pass)
  }

  const inheritProps = filterProps(overrideProps, inherit)

  return forceInherit ? inheritProps : {...inheritProps, ...rest, $pass}
}

const childFilter = (child: ReactNode): boolean => {
  const type = useBaseType(child)

  if (type) {
    return type[WITH_INHERIT_SYM] === true
  }

  return false
}

export const useInherit = <P extends Record<string, any>>(props: P & InheritParentProps, children: ReactNode): ReactNode => {
  const {inheritItems = false, inheritProps, $pass, ...rest} = props

  if (!inheritItems) {
    return children
  }

  const baseInheritProps = {...inheritProps, ...filterProps({...$pass, ...rest}, inheritItems)}

  return useOverride(children, baseInheritProps, {
    childFilter,
    propsMerger,
  })
}

export const markInherit = <T>(component: T): T => {

  component[WITH_INHERIT_SYM] = true

  return component
}
