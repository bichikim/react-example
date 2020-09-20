import {
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode, useCallback,
  useMemo,
} from 'react'
import {useMapChildren, UseMapChildrenExecuteProps} from './use-map-children'

type OverridePropsMerger = (overrideProps: Record<string, any>, childProps: Record<string, any>, child: ReactElement) => Record<string, any>

export interface OverrideOptions {
  childFilter?: (child: ReactNode) => boolean
  propsMerger?: OverridePropsMerger
}

export interface NodeOverrideProps extends OverrideOptions{
  overrideProps?: Record<string, any>
}

export const nodeOverride = (props: NodeOverrideProps, children?: ReactNode): ReactNode => {

  const {propsMerger, childFilter, overrideProps} = props

  return useOverride(children, overrideProps, {childFilter, propsMerger})
}

export const useOverride = (
  _children?: ReactNode,
  overrideProps: Record<string, any> = {},
  options: OverrideOptions = {},
): ReactNode => {

  const {propsMerger, childFilter} = options

  const execute = useMemo(
    () => curryOverridePropsOne(overrideProps)(propsMerger),
    [overrideProps, propsMerger],
  )

  const filter = useCallback((child) => {
    if (!isValidElement(child)) {
      return false
    }

    if (childFilter) {
      return childFilter(child)
    }

    return true
  }, [childFilter])

  return useMapChildren(_children, {
    execute,
    filter,
  })
}

export const curryOverridePropsOne = (props) =>
  (merger?: OverridePropsMerger) =>
    ({child}: UseMapChildrenExecuteProps) =>
      overridePropsOne(child, props, merger)

export const overridePropsOne = (
  child: ReactNode | undefined,
  overrideProps: Record<string, any>,
  merger?: OverridePropsMerger,
) => {

  if (!isValidElement(child)) {
    return child
  }

  const childProps = child?.props ?? {}

  const newProps = merger ? merger(overrideProps, childProps, child) : {...childProps, ...overrideProps}

  return cloneElement(child, {...newProps})
}
