import {ObjectOrArray, Theme} from 'styled-system'
import {ColorNames, Colors, colors} from './colors'
import {FontWeightNames, fontWeights, FontWeights} from './font-weights'
import {FontSizeNames, FontSizes, fontSizes} from './font-sizes'
import {Typography, typography, TypographyNames} from './typography'

export type {
  Colors,
  ColorNames,
  FontSizeNames,
  FontSizes,
  FontWeightNames,
  FontWeights,
  Typography,
}

export interface ThemeExtend {
  typography: ObjectOrArray<TypographyNames>
}

export type UITheme = Theme & ThemeExtend

export const theme: UITheme = {
  colors,
  fontSizes,
  fontWeights,
  typography,
}
