import {ASProps, System} from '../types'
import {
  borderShort,
  BorderShortProps,

  FlexWrapProps,
  fontShort,
  FontShortProps,
  show,
  ShowProps,
  textDecoration,
  TextDecorationProps,
} from '@/ui/systems'
import {variantComplex} from '../variant-complex'
import fluid from 'fluid-system'
import {MotionProps} from 'framer-motion'
import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
  position,
  PositionProps,
  ResponsiveValue,
  shadow,
  ShadowProps,
  style,
  Theme,
  typography,
  TypographyProps,
} from 'styled-system'

export interface TypographyVariantProps {
  typography?: ResponsiveValue<string>
}

export interface RefProps {
  ref?: any
}

export type Props =
  & ASProps
  & RefProps
  & FlexWrapProps
  & FlexboxProps
  & BorderProps
  & ColorProps
  & LayoutProps
  & MarginProps
  & PaddingProps
  & PositionProps
  & ShadowProps
  & TypographyProps
  & ShowProps
  & FontShortProps
  & BorderShortProps
  & TypographyVariantProps
  & MotionProps
  & TextDecorationProps

const display = style({
  cssProperty: 'display',
  prop: 'dp',
})
export const boxSystem: System<Props, Theme> = [
  {
    boxSizing: 'border-box',
    display: 'block',
  },
  textDecoration,
  fluid(compose(layout, color, shadow, position, margin, typography, border, padding, display, flexbox)),
  fontShort,
  borderShort,
  show,
  variantComplex({
    prop: 'textSet',
    scale: 'typography',
  }),
]
