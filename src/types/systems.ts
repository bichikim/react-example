import {CSSObject as _CSSObject, CssFunctionReturnType} from '@styled-system/css'
import {styleFn, Theme} from 'styled-system'

export type StyleFunction = styleFn

export interface SystemFunction<P, T extends Theme = Theme> {
  (props: PropsWithTheme<P, T>): _CSSObject | CssFunctionReturnType

  cache?: Record<string, any>
  config?: Record<string, any>
  propNames?: string[]
}

export type PossibleSystemItem<P, T> = _CSSObject | SystemFunction<P, T> | styleFn

export type CSSObject = PossibleSystemItem<any, any>

export type Systems<P, T = Theme> =
  ReadonlyArray<PossibleSystemItem<P, T>>

export type PropsWithTheme<P, T extends Theme = Theme> = P & {
  theme?: T
}

