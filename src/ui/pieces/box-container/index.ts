import css from '@styled-system/css'
import {Property} from 'csstype'
import {
  borderShort,
  BorderShortProps,
  fontShort,
  FontShortProps,
  show,
  ShowProps,
} from 'src/systems'
import {FC} from 'react'
import {System} from 'src/types'
import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  layout,
  LayoutProps,
  margin, MarginProps,
  padding,
  PaddingProps,
  position,
  PositionProps, ResponsiveValue,
  shadow,
  ShadowProps,
  system,
  Theme,
  typography,
  TypographyProps,
} from 'styled-system'
import styled from 'styled-components'
import {variantComplex} from '@/utils/variant-complex'
import {motion, MotionProps} from 'framer-motion'
import {ASProps} from '@/ui/types'

export interface TextDecorationProps {
  td?: Property.TextDecoration<string>
  textDecoration?: Property.TextDecoration<string>
}

export interface TypographyVariantProps {
  typography?: ResponsiveValue<string>
}

export type BoxContainerProps =
  TextDecorationProps & ASProps &
  BorderProps & ColorProps & LayoutProps & MarginProps & PaddingProps & PositionProps & ShadowProps &
  TypographyProps & ShowProps & FontShortProps & BorderShortProps & TypographyVariantProps & MotionProps

export const boxContainerSystem: System<BoxContainerProps, Theme> = [
  css({
    fontFamily: 'spoqaSans',
  }),
  compose(layout, color, shadow, position, margin, padding, typography, border),
  fontShort,
  borderShort,
  show,
  variantComplex({
    prop: 'typography',
    scale: 'typography',
  }),
  system({
    td: {
      property: 'textDecoration',
    },
    textDecoration: {
      property: 'textDecoration',
    },
  }),
]

export const BoxContainer: FC<BoxContainerProps> = styled(motion.div)(
  {},
  ...boxContainerSystem,
)
