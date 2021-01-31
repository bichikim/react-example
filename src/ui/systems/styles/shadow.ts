import {Property} from 'csstype'
import {ResponsiveValue, system} from 'styled-system'
import {UITheme} from '@/ui'

export interface BoxShadowProps<T extends UITheme = Required<UITheme>> {
  boxShadow?: ResponsiveValue<Property.BoxShadow, T>
  sdw?: ResponsiveValue<Property.BoxShadow, T>
}

export const boxShadow = system<BoxShadowProps>({
  boxShadow: true,
  sdw: {
    property: 'boxShadow',
    scale: 'shadows',
  },
})

export interface TextShadowProps<T extends UITheme = Required<UITheme>> {
  textShadow?: ResponsiveValue<Property.TextShadow, T>
}

export const textShadow = system<TextShadowProps>({
  textShadow: true,
})
