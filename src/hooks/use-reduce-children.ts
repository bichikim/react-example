import {Children,    isValidElement, ReactNode} from 'react'

export type Execute = (
  child: ReactNode,
  index: number,
) => ReactNode


export interface ChildrenReduceProps {
  execute: Execute
  filter?: (child: ReactNode) => boolean
  leftFilter?: (child: ReactNode) => ReactNode
}

export const defaultFilter = (child) => {
  return isValidElement(child)
}

export const useReduceChildren = (children: ReactNode, props: ChildrenReduceProps) => {
  const {execute, filter, leftFilter} = props

  return Children.map(children, (child, index) => {
    const filterResult = filter ? filter(child) : true

    if (filterResult) {
      return  execute(child, index)
    }

    return leftFilter ? leftFilter(child) : null
  })
}
