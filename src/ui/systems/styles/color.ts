import {Property} from 'csstype'
import {ResponsiveValue, system} from 'styled-system'
import {UITheme} from '@/ui'

export interface BackgroundColorProps<T extends UITheme = Required<UITheme>> {
  backgroundColor?: ResponsiveValue<Property.BackgroundColor>
  bg?: ResponsiveValue<Property.BackgroundColor>
}

export const backgroundColor = system<BackgroundColorProps>({
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
  bg: {
    property: 'backgroundColor',
    scale: 'colors',
  },
})

export interface ColorProps<T extends UITheme = Required<UITheme>> {
  color?: ResponsiveValue<Property.Color>
}

export const color = system<ColorProps>({
  color: {
    property: 'color',
    scale: 'colors',
  },
})
