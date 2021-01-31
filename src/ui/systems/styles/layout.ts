import {Property} from 'csstype'
import {RequiredTheme, ResponsiveValue, system,  Theme} from 'styled-system'
import {UITheme} from '@/ui'

export interface OverflowProps<T extends UITheme = Required<UITheme>> {
  overflow?: ResponsiveValue<Property.Overflow, T>
}

export const overflow = system<OverflowProps>({
  overflow: true,
})

export interface DisplayProps<T extends Theme = RequiredTheme> {
  display?: ResponsiveValue<Property.Display, T>
  dp?: ResponsiveValue<Property.Display, T>
}

export const display = system<DisplayProps>({
  display: true,
  dp: {
    property: 'display',
  },
})

export interface OpacityProps<T extends Theme = RequiredTheme> {
  opacity?: ResponsiveValue<Property.Opacity | number, T>
}

export const opacity = system({
  opacity: {
    property: 'opacity',
    scale: 'opacities',
  },
})

export interface FilterProps<T extends Theme = RequiredTheme> {
  filter?: ResponsiveValue<Property.Filter, T>
}

export const filter = system<FilterProps>({
  filter: true,
})
