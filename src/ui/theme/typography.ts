import {fontSizes} from './font-sizes'
import {lineHeights} from './line-heights'
import {fontWeights} from './font-weights'
import {letterSpacings} from './letter-spacings'

const h1 = {
  fontSize: fontSizes.size9,
  fontWeight: fontWeights.light,
  letterSpacing: letterSpacings.size5,
  lineHeight: lineHeights.size10,
}

export const typography = Object.assign({
  h1,
}, [])

export type Typography = typeof typography
export type TypographyNames = keyof Typography

