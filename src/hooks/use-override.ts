import {Children, cloneElement, isValidElement, ReactElement, ReactNode, useMemo} from 'react'

type OverridePropsMerger = (overrideProps: Record<string, any>, childProps: Record<string, any>, child: ReactElement) => Record<string, any>

export interface OverrideOptions {
  childFilter?: (child: ReactElement) => boolean
  propsMerger?: OverridePropsMerger
}

export interface NodeOverrideProps extends OverrideOptions {
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
  if (!_children) {
    return _children
  }
  const {propsMerger, childFilter} = options
  const overrideOne = useMemo(
    () => curryOverridePropsOne(overrideProps)(propsMerger),
    [overrideProps, propsMerger],
  )

  return Children.map(_children, (child) => {
    if (!isValidElement(child)) {
      return child
    }

    if (childFilter && !childFilter(child)) {
      return child
    }

    return overrideOne(child)
  })
}

export const curryOverridePropsOne = (props) =>
  (merger?: OverridePropsMerger) =>
    (child) =>
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
