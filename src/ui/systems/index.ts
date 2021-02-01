import {
  backgroundColor,  BackgroundColorProps,  border, BorderProps,
  boxShadow,  BoxShadowProps,  color, ColorProps, flex, flexItem, FlexItemProps, FlexProps,
  size, SizeProps, text, TextProps,
  textShadow, TextShadowProps, transform, TransformProps,
} from './styles'
import {
  grid,
  GridProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
  position,
  PositionProps,
} from 'styled-system'
import {FlexItemRangeProps} from '@/ui'

export * from './gap'
export * from './flex-column'
export * from './flex-range'
export * from './flex-wrap'
export * from './around-gap'
export * from './styles'

const systems = {
  backgroundColor,
  border,
  boxShadow,
  color,
  flex,
  flexItem,
  grid,
  margin,
  padding,
  position,
  size,
  text,
  textShadow,
  transform,
}

export type Systems = typeof systems
export type SystemNames = keyof Systems
export type SystemsMapper = Record<SystemNames, boolean>
export interface SystemsProps extends
  SizeProps, TransformProps, BorderProps, TextProps, BoxShadowProps, TextShadowProps, FlexItemProps,
  GridProps, MarginProps, PaddingProps, PositionProps, ColorProps, BackgroundColorProps, FlexItemRangeProps,
  FlexProps
{}

export const systemsTrueMapper: SystemsMapper = {
  backgroundColor: true,
  border: true,
  boxShadow: true,
  color: true,
  flex: true,
  flexItem: true,
  grid: true,
  margin: true,
  padding: true,
  position: true,
  size: true,
  text: true,
  textShadow: true,
  transform: true,
}

export const getSystems = (map: Partial<SystemsMapper>) => {
  return Object.keys(map).map((key) => {
    const value = map[key]
    return value ? systems[key] : null
  })
}
