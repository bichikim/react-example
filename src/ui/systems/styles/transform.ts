import {Property} from 'csstype'
import {ResponsiveValue, system} from 'styled-system'
import {UITheme} from '@/ui'

export interface TransformProps<T extends UITheme = Required<UITheme>> {
  transform?: ResponsiveValue<Property.Transform, T>
  transformBox?: ResponsiveValue<Property.TransformBox, T>
  transformOrigin?: ResponsiveValue<Property.TransformOrigin, T>
  transformStyle?: ResponsiveValue<Property.TransformStyle, T>
}

export const transform = system<TransformProps>({
  transform: true,
  transformBox: true,
  transformOrigin: true,
  transformStyle: true,
})

