import 'jest-extended'
import * as React from 'react'
import {
  CSSObject, Interpolation,
  InterpolationFunction,
  StyledComponent, StyledComponentPropsWithRef,
  ThemedStyledProps,
} from 'styled-components'

declare module 'styled-components' {
  export interface ThemedStyledFunctionBase<
    C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
    T extends Record<string, any>,
    // eslint-disable-next-line @typescript-eslint/ban-types
    O extends Record<string, any> = {},
    A extends keyof any = never
    > {
    (first: TemplateStringsArray): StyledComponent<C, T, O, A>
    (
      ...rest: Array<
        Interpolation<
          ThemedStyledProps<StyledComponentPropsWithRef<C> & O, T>
          >
        >
    ): StyledComponent<C, T, O, A>
    <U extends Record<string, any>>(
      first:
        | TemplateStringsArray
        | CSSObject
        | InterpolationFunction<
        ThemedStyledProps<StyledComponentPropsWithRef<C> & O & U, T>
        >,
      ...rest: Array<
        Interpolation<
          ThemedStyledProps<StyledComponentPropsWithRef<C> & O & U, T>
          >
        >
    ): StyledComponent<C, T, O & U, A>
  }
}
