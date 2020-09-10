import {Property} from 'csstype'
import {isValidElement, ReactNode} from 'react'
import {FlexRangeProps} from '@/systems/flex-range'
import {ResponsiveValue} from 'styled-system'
import {ComplexFunctionComponent, createWith} from './utils'
import {EmptyObject} from '@/types'

export type Range = number | 'space' | 'auto' | 'force-space'

export const FLEX_SYM = Symbol('flex-child')

export type WithFlexProps =
  & FlexRangeProps
  & {
  basis?: ResponsiveValue<Property.FlexBasis>
  show?: ResponsiveValue<boolean>
  skipWrappingMe?: ResponsiveValue<boolean>
}

export const isSupportFlex = (node: ReactNode): boolean => {
  return isValidElement(node) && Boolean(node?.type?.[FLEX_SYM])
}

export const withFlex = <P extends Record<string, any>, T = any>(
  component: ComplexFunctionComponent<P, T>,
) => createWith<P, WithFlexProps, EmptyObject, T>(
  component,
  {
    identifier: FLEX_SYM,
  },
)
