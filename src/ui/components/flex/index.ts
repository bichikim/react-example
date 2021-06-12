import {useMapChildren, withFastMemo} from '@/hooks'
import {BoxProps, FlexColumnProps, FlexRangeProps, FlexWrapProps, GapProps, Range} from '@/ui'
import {createElement as h, ReactNode, useCallback} from 'react'
import {ResponsiveValue} from 'styled-system'
import {_Background, _Container, _Item, _Layout} from './items'

export type UseMapChildrenExecute = (child: ReactNode, index: number) => ReactNode

const DEFAULT_DIVISION = 12
const flexChildLeftFilter = (child: ReactNode): ReactNode => {
  return child
}

export interface FlexProps extends BoxProps, FlexRangeProps, FlexColumnProps, GapProps, FlexWrapProps {
  rangeItems?: ResponsiveValue<Range>
}

export const Flex: FC<FlexProps> = withFastMemo((props) => {
  const {
    children: _children,
    rangeItems = 'auto',
    division = DEFAULT_DIVISION,
    gapStrategy,
    reverse,
    column,
    gap,
    as,
    wrap = true,
    ...rest
  } = props

  const createItem: UseMapChildrenExecute = useCallback((child) => {
    const {range = rangeItems, basis, show = true, offset} = (child as any)?.props || {}
    return (
      h(_Item, {basis, column, division, offset, range, show}, child)
    )
  }, [rangeItems, division, column])

  const children = useMapChildren(_children, {
    afterFilter: flexChildLeftFilter,
    execute: createItem,
  })

  return (
    h(_Layout, {...rest, as, column, gap, gapStrategy},
      h(_Background, {...rest}),
      h(_Container, {
        ...rest,
        column,
        gap,
        gapStrategy,
        reverse,
        wrap,
      }, children),
    )
  )
})
