import {Property} from 'csstype'
import {ResponsiveValue, system} from 'styled-system'
import {UITheme} from '@/ui'

export interface TextProps<T extends UITheme = Required<UITheme>> {
  fontFamily?: ResponsiveValue<Property.FontFamily, T>
  fontSize?: ResponsiveValue<Property.FontSize, T>
  fontStyle?: ResponsiveValue<Property.FontStyle, T>
  fontWeight?: ResponsiveValue<Property.FontWeight, T>
  // letterSpacing
  /**
   * css fontSize
   */
  fs?: ResponsiveValue<Property.FontSize, T>
  /**
   * css fontWeight
   */
  fw?: ResponsiveValue<Property.FontWeight, T>
  letterSpacing?: ResponsiveValue<Property.LetterSpacing, T>
  lineHeight?: ResponsiveValue<Property.LineHeight, T>
  td?: ResponsiveValue<Property.TextDecoration, T>
  textAlign?: ResponsiveValue<Property.TextAlign, T>
  textAlignLast?: ResponsiveValue<Property.TextAlignLast, T>
  textAnchor?: ResponsiveValue<Property.TextAnchor, T>
  textDecoration?: ResponsiveValue<Property.TextDecoration, T>
  textEmphasis?: ResponsiveValue<Property.TextEmphasis, T>
  textJustify?: ResponsiveValue<Property.TextJustify, T>
  textOverflow?: ResponsiveValue<Property.TextOverflow, T>
  textTransform?: ResponsiveValue<Property.TextTransform, T>
  textWrap?: ResponsiveValue<Property.WhiteSpace | boolean, T>
  whiteSpace?: ResponsiveValue<Property.WhiteSpace, T>
  wordBreak?: ResponsiveValue<Property.WordBreak, T>
}

export const text = system<TextProps>({
  fontFamily: true,
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
  },
  fontStyle: true,
  fontWeight: true,
  fs: {
    property: 'fontSize',
    scale: 'fontSizes',
  },
  fw: {
    property: 'fontWeight',
  },
  letterSpacing: true,
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights',
  },
  td: {
    property: 'textDecoration',
  },
  textAlign: true,
  textAlignLast: true,
  textAnchor: true,
  textDecoration: true,
  textEmphasis: true,
  textJustify: true,
  textOverflow: true,
  textTransform: true,
  textWrap: {
    property: 'whiteSpace',
    transform: (value) => {
      if (value === true) {
        return 'normal'
      }
      if (value === false) {
        return 'nowrap'
      }
      return value
    },
  },
  whiteSpace: true,
  wordBreak: true,
})
