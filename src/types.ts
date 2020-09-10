import {CssFunctionReturnType, CSSObject} from '@styled-system/css'
import {styleFn, Theme} from 'styled-system'
import {InterpolationFunction, ThemedStyledProps} from 'styled-components'

export type EmptyObject = {
  // empty
}

export type PropsWithTheme<P, T extends Theme = Theme> = P & {
  theme?: Theme
}

export type SystemFunc<P, T extends Theme = Theme> =
  (props: PropsWithTheme<P, T>) => CSSObject | CssFunctionReturnType

export type PossibleSystemItem<P, T> = CSSObject | styleFn | InterpolationFunction<ThemedStyledProps<P, T>>

export type System<P, T = Theme> = ReadonlyArray<PossibleSystemItem<P, T> | ReadonlyArray<PossibleSystemItem<P, T>>>


