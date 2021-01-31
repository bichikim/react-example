import {compact} from 'lodash'
import {Children, isValidElement, ReactNode, useMemo} from 'react'

export type UseMapChildrenExecute = (child: ReactNode, index: number) => ReactNode

export interface UseMapChildrenOptions {
  /**
   * how to handle left children after the filter
   * @param child
   */
  afterFilter?: (child: ReactNode) => ReactNode
  /**
   * remove things in result array as lodash.compact
   */
  compact?: boolean
  /**
   * execute something with child
   */
  execute?: UseMapChildrenExecute
  /**
   * how to filter children
   * @param child each children
   */
  filter?: (child: ReactNode) => boolean
}

const defaultAfterFilter = () => {
  return null
}

const defaultExecute = (child: ReactNode) => {
  return child
}

const defaultFilter = (child: ReactNode) => {
  return isValidElement(child)
}

/**
 * loop each children with execute and return array of its result
 * child reducer
 * @stable
 * @param children
 * @param options
 */
export const useMapChildren = (children?: ReactNode, options: UseMapChildrenOptions = {}): ReactNode => {

  const {
    execute = defaultExecute,
    afterFilter = defaultAfterFilter,
    filter = defaultFilter,
    compact: beCompact = false,
  } = options

  const newChildren = useMemo(() => {
    if (!children) {
      return children
    }

    return Children.map(children, (child, index) => {
      if (!filter(child)) {
        return afterFilter(child)
      }

      return execute(child, index)
    })
  }, [afterFilter, execute, filter, children])

  if (beCompact && Array.isArray(newChildren)) {
    return compact(newChildren)
  }

  return newChildren
}
