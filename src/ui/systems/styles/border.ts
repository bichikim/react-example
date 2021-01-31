import {Property} from 'csstype'
import {BorderProps as _BorderProps,  ResponsiveValue, system} from 'styled-system'
import {UITheme} from '@/ui'

export interface BorderProps<T extends UITheme = Required<UITheme>> extends _BorderProps<T>{
  b?: ResponsiveValue<Property.Border | number, T>
  bb?: ResponsiveValue<Property.BorderBottom | number, T>
  bbc?: ResponsiveValue<Property.BorderBottomColor, T>
  bbw?: ResponsiveValue<Property.BorderBottomWidth | number, T>
  bc?: ResponsiveValue<Property.BorderColor, T>
  bl?: ResponsiveValue<Property.BorderLeft | number, T>
  blc?: ResponsiveValue<Property.BorderLeftColor, T>
  blw?: ResponsiveValue<Property.BorderLeftWidth | number, T>
  br?: ResponsiveValue<Property.BorderRight | number, T>
  bra?: ResponsiveValue<Property.BorderRadius | number, T>
  brc?: ResponsiveValue<Property.BorderRightColor, T>
  brw?: ResponsiveValue<Property.BorderRightWidth | number, T>
  bs?: ResponsiveValue<Property.BorderStyle | number, T>
  bt?: ResponsiveValue<Property.BorderTop | number, T>
  btc?: ResponsiveValue<Property.BorderTopColor, T>
  btw?: ResponsiveValue<Property.BorderTopWidth | number, T>
  bw?: ResponsiveValue<Property.BorderWidth | number, T>
  bx?: ResponsiveValue<Property.BorderLeft | number, T>
  bxw?: ResponsiveValue<Property.BorderLeftWidth | number, T>
  by?: ResponsiveValue<Property.BorderTop | number, T>
  byw?: ResponsiveValue<Property.BorderTopWidth | number, T>
}

export const border = system<BorderProps>({
  b: {
    property: 'border',
  },
  bb: {
    property: 'borderBottom',
  },
  bbc: {
    property: 'borderBottomColor',
    scale: 'colors',
  },
  bbw: {
    property: 'borderBottomWidth',
    scale: 'borderWidth',
  },
  bc: {
    property: 'borderColor',
    scale: 'colors',
  },
  bl: {
    property: 'borderLeft',
  },
  blc: {
    property: 'borderLeftColor',
    scale: 'colors',
  },
  blw: {
    property: 'borderLeftWidth',
    scale: 'borderWidth',
  },
  border: {
    property: 'border',
  },
  borderBottom: {
    property: 'borderBottom',
  },
  borderBottomColor: {
    property: 'borderBottomColor',
    scale: 'colors',
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii',
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii',
  },
  borderBottomStyle: {
    property: 'borderBottomStyle',
  },
  borderBottomWidth: {
    property: 'borderBottomWidth',
    scale: 'borderWidth',
  },
  borderColor: {
    property: 'borderColor',
    scale: 'colors',
  },
  borderLeft: {
    property: 'borderLeft',
  },
  borderLeftColor: {
    property: 'borderLeftColor',
    scale: 'colors',
  },
  borderLeftStyle: {
    property: 'borderLeftStyle',
  },
  borderLeftWidth: {
    property: 'borderLeftWidth',
    scale: 'borderWidths',
  },
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii',
  },
  borderRight: {
    property: 'borderRight',
  },
  borderRightColor: {
    property: 'borderRightColor',
    scale: 'colors',
  },
  borderRightStyle: {
    property: 'borderRightStyle',
  },
  borderRightWidth: {
    property: 'borderRightWidth',
    scale: 'borderWidth',
  },
  borderStyle: {
    property: 'borderStyle',
  },
  borderTop: {
    property: 'borderTop',
  },
  borderTopColor: {
    property: 'borderTopColor',
    scale: 'colors',
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii',
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii',
  },
  borderTopStyle: {
    property: 'borderTopStyle',
  },
  borderTopWidth: {
    property: 'borderTopWidth',
    scale: 'borderWidths',
  },
  borderWidth: {
    property: 'borderWidth',
    scale: 'borderWidths',
  },
  borderX: {
    properties: ['borderLeft', 'borderRight'],
  },
  borderY: {
    properties: ['borderTop', 'borderBottom'],
  },
  br: {
    property: 'borderRight',
  },
  bra: {
    property: 'borderRadius',
    scale: 'radii',
  },
  brc: {
    property: 'borderRightColor',
    scale: 'colors',
  },
  brw: {
    property: 'borderRightWidth',
    scale: 'borderWidths',
  },
  bs: {
    property: 'borderStyle',
  },
  bt: {
    property: 'borderTop',
  },
  btc: {
    property: 'borderTopColor',
    scale: 'colors',
  },
  btw: {
    property: 'borderTopWidth',
    scale: 'borderWidths',
  },
  bw: {
    property: 'borderWidth',
    scale: 'borderWidths',
  },
  bx: {
    properties: ['borderRight', 'borderLeft'],
  },
  bxw: {
    properties: ['borderRightWidth', 'borderLeftWidth'],
    scale: 'borderWidths',
  },
  by: {
    properties: ['borderBottom', 'borderTop'],
  },
  byw: {
    properties: ['borderBottomWidth', 'borderTopWidth'],
    scale: 'borderWidths',
  },
})
