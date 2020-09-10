import {
  column,
  ColumnProps, createGap, GapProps,
} from '@/systems'
import {FC} from 'react'
import fluid from 'fluid-system'
import styled from 'styled-components'
import {color, ColorProps, compose, flexbox, FlexboxProps,
  padding,
  PaddingProps,
  position,
  PositionProps,
  system,
} from 'styled-system'
import {WrapProps} from './types'

export type FlexContainerProps =
  ColorProps & FlexboxProps & PositionProps & ColumnProps & GapProps & WrapProps &
  PaddingProps & JSX.IntrinsicElements['div']

export const FlexContainer: FC<FlexContainerProps> = styled('div')({
  boxSizing: 'border-box',
  display: 'flex',
  height: '100%',
  position: 'relative',
},
fluid(compose(color, padding, position, flexbox)),
createGap('100%'),
column,
system({
  wrap: {
    property: 'flexWrap',
    transform(value) {
      switch (value) {
        case true:
          return 'wrap'
        case false:
          return 'no-wrap'
      }
      return value
    },
  },
}))
