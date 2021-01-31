import {Property} from 'csstype'
import {ResponsiveValue, system} from 'styled-system'
import {UITheme} from '@/ui'

export interface FlexProps<T extends UITheme = Required<UITheme>> {
  alignContent?: ResponsiveValue<Property.AlignContent, T>
  alignItems?: ResponsiveValue<Property.AlignItems, T>
  fai?: ResponsiveValue<Property.AlignItems, T>
  fd?: ResponsiveValue<Property.FlexDirection, T>
  fjc?: ResponsiveValue<Property.JustifyContent, T>
  fji?: ResponsiveValue<Property.JustifyItems, T>
  flexDirection?: ResponsiveValue<Property.FlexDirection, T>
  flexWrap?: ResponsiveValue<Property.FlexWrap, T>
  fxd?: ResponsiveValue<Property.FlexDirection, T>
  justifyContent?: ResponsiveValue<Property.JustifyContent, T>
  justifyItems?: ResponsiveValue<Property.JustifyItems, T>
  order?: ResponsiveValue<Property.Order, T>
}

export const flex = system<FlexProps>({
  alignContent: true,
  alignItems: true,
  fai: {
    property: 'alignItems',
  },
  fd: {
    property: 'flexDirection',
  },
  fjc: {
    property: 'justifyContent',
  },
  fji: {
    property: 'justifyItems',
  },
  flexDirection: true,
  flexWrap: true,
  fxd: {
    property: 'flexDirection',
  },
  justifyContent: true,
  justifyItems: true,
  order: true,
})

export interface FlexItemProps<T extends UITheme = Required<UITheme>> {
  alignSelf?: ResponsiveValue<Property.AlignSelf, T>
  flex?: ResponsiveValue<Property.Flex, T>
  flexBasis?: ResponsiveValue<Property.FlexBasis, T>
  flexGrow?: ResponsiveValue<Property.FlexGrow, T>
  flexShrink?: ResponsiveValue<Property.FlexShrink, T>
  justifySelf?: ResponsiveValue<Property.JustifySelf, T>
}

export const flexItem = system<FlexItemProps>({
  alignSelf: true,
  flex: true,
  flexBasis: true,
  flexGrow: true,
  flexShrink: true,
  justifySelf: true,
})
