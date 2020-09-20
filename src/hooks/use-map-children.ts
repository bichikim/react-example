import {Children,    isValidElement, ReactNode} from 'react'

import {compact} from 'lodash'

export interface UseMapChildrenExecuteProps {
  child: ReactNode
  index: number
}

export type UseMapChildrenExecute = (props: UseMapChildrenExecuteProps) => ReactNode

export interface UseMapChildrenOptions {
  afterFilter?: (child: ReactNode) => ReactNode
  compact?: boolean
  /**
   * execute something with child
   * @param child
   * @param index
   * @param originalChildrenArray
   */
  execute?: UseMapChildrenExecute
  filter?: (child: ReactNode) => boolean
}

const defaultAfterFilter = () => {
  return null
}

const defaultExecute = ({child}: UseMapChildrenExecuteProps) => {
  return child
}

const defaultFilter = (child: ReactNode) => {
  return isValidElement(child)
}

export const useMapChildren = (children?: ReactNode, options: UseMapChildrenOptions = {}): ReactNode => {

  const {
    execute = defaultExecute,
    afterFilter = defaultAfterFilter,
    filter = defaultFilter,
    compact: beCompact = false,
  } = options

  if (!children) {
    return children
  }

  const newChildren = Children.map(children, (child, index) => {
    if (!filter(child)) {
      return afterFilter(child)
    }

    return execute({child, index})
  })

  if (beCompact) {
    return compact(newChildren)
  }

  return newChildren
}
