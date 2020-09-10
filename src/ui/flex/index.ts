import {Execute, useReduceChildren} from '@/hooks'
import {withFlex, withInherit} from '@/with'
import {createElement as h, ReactNode} from 'react'
import {FlexBackground} from './FlexBackground'
import {FlexContainer} from './FlexContainer'
import {FlexItem} from './FlexItem'
import {FlexLayout} from './FlexLayout'
import {Props} from './types'

export type FlexProps = Props

const flexChildFilter = (child: ReactNode): boolean => {
  return Boolean(child)
}

const flexChildLeftFilter = (child: ReactNode): ReactNode => {
  return child
}

const DEFAULT_DIVISION = 12

export const Flex = withFlex(withInherit<FlexProps>((props) => {
  const {
    children: _children,
    rangeItems = 'auto',
    division = DEFAULT_DIVISION,
    reverse,
    column,
    bg,
    wrap = false,
    backgroundColor,
    element,
    onClick,
    ...rest
  } = props
  const containerProps = {element, onClick}

  const createItem: Execute = (child) => {
    const {range = rangeItems, basis, show = true, offset} = (child as any)?.props || {}

    return (
      h(FlexItem, {basis, column, division, offset, range, reverse, show}, child)
    )
  }

  const children = useReduceChildren(_children, {
    execute: createItem,
    filter: flexChildFilter,
    leftFilter: flexChildLeftFilter,
  })

  return (
    h(FlexLayout, {...rest, ...containerProps},
      h(FlexBackground, {backgroundColor, bg}),
      h(FlexContainer, {...rest, column, reverse, wrap}, children),
    )
  )
}, {omit: ['as']}))

Flex.displayName = 'Flex'
