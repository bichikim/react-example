import {Property} from 'csstype'
import {ResponsiveValue, system} from 'styled-system'
import {UITheme} from '@/ui'

export interface SizeProps<T extends UITheme = Required<UITheme>> {
  height?: ResponsiveValue<Property.Height | number, T>
  maxHeight?: ResponsiveValue<Property.MaxHeight | number, T>
  maxWidth?: ResponsiveValue<Property.MaxWidth | number, T>
  minHeight?: ResponsiveValue<Property.MinHeight | number, T>
  minWidth?: ResponsiveValue<Property.MinWidth | number, T>
  size?: ResponsiveValue<Property.Width | number, T>
  width?: ResponsiveValue<Property.Width | number, T>
}

export const size = system<SizeProps>({
  height: {
    property: 'height',
    scale: 'sizes',
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes',
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes',
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes',
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes',
  },
  size: {
    properties: ['width', 'height'],
    scale: 'sizes',
  },
  width: {
    property: 'width',
    scale: 'sizes',
  },
})
