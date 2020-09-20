import {Execute, useReduceChildren} from '@/hooks'
import {withFlex, withInherit} from '@/with'
import {FC, createElement as h, ReactNode} from 'react'
import {flexBackgroundSystem} from './flex-background-system'
import {flexContainerSystems} from './flex-container-system'
import {flexItemSystem} from './flex-item-system'
import {flexLayoutSystem} from './flex-layout-system'
import {Props} from './types'
import styled from '@emotion/styled'

export type FlexProps = Props

const flexChildFilter = (child: ReactNode): boolean => {
  return Boolean(child)
}

const flexChildLeftFilter = (child: ReactNode): ReactNode => {
  return child
}

const DEFAULT_DIVISION = 12

const FlexBackground: FC<any> = styled('div')(...flexBackgroundSystem as any)
const FlexContainer: FC<any> = styled('div')(...flexContainerSystems as any)
const FlexItem: FC<any> = styled('div')(...flexItemSystem as any)
const FlexLayout: FC<any> = styled('div')(...flexLayoutSystem as any)

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
    onClick,
    ...rest
  } = props

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
    h(FlexLayout, {...rest, onClick},
      h(FlexBackground, {backgroundColor, bg}),
      h(FlexContainer, {...rest, column, reverse, wrap}, children),
    )
  )
}, {omit: ['as']}))

Flex.displayName = 'Flex'
