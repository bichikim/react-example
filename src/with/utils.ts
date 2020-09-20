import {
  ComponentClass,
  ForwardRefRenderFunction,
  FunctionComponent,
  createElement as h,
  MutableRefObject,
  PropsWithChildren,
  ReactElement, ReactNode, useRef,
} from 'react'

export type PureFunctionComponent<P> = {
  (props: PropsWithChildren<P>): ReactNode
  displayName?: string
}

export type EmptyObject = {
  // empty
}


export type AllComponentType<P, T = any> =
  ComponentClass<P>
  | FunctionComponent<P>
  | ForwardRefRenderFunction<T, P>

interface ForwardOptionalRefRenderFunction<T, P = Record<string, any>> {
  (props: PropsWithChildren<P>, ref?: ((instance: T | null) => void) | MutableRefObject<T | null> | null): ReactElement | null
  defaultProps?: never
  displayName?: string
  propTypes?: never
}

/**
 * f
 */
export type ComplexFunctionComponent<P extends Record<string, any>, T = any> =
  FunctionComponent<P> | ForwardOptionalRefRenderFunction<T, P>

export const beFunctionComponent =
  <P, T = any>(component: AllComponentType<P, T>): ForwardOptionalRefRenderFunction<T, P> => {
    if (typeof component === 'function') {
      return component as any
    }

    return (props, ref?: any) => {
      const {children, ...rest} = props
      const isRef = Boolean(ref.current)
      const _ref = useRef()
      return h(component, {...rest, ref: isRef ? ref : _ref}, children)
    }
  }

export interface CreateWithOptions<P, OP> {
  identifier?: symbol
  name?: string
  postProcessing?: (With: ComplexFunctionComponent<P & OP>) => ComplexFunctionComponent<P & OP>
}


interface PostProcessingOptions<P, OP> extends CreateWithOptions<P, OP> {
  assign?: Record<symbol | string | number, any>
}

export const componentPostProcessing = <P, OP>(With: ComplexFunctionComponent<P & OP>, options: PostProcessingOptions<P, OP>) => {
  const {postProcessing, identifier, name, assign = {}} = options
  Object.assign(With, assign)

  if (identifier) {
    With[identifier] = true
  }

  if (name) {
    With.displayName = name
  }

  if (postProcessing) {
    return postProcessing(With)
  }

  return With
}

export const createWith = <P extends Record<string, any>, OP extends Record<string, any> = EmptyObject, AP extends Record<symbol, any> = EmptyObject, T = any>(
  component: AllComponentType<P, T>,
  options: CreateWithOptions<P, OP> = {},
  draft?: (props: PropsWithChildren<P & OP>) => Partial<P> & OP & AP,
): ComplexFunctionComponent<P & OP> => {
  const _component = beFunctionComponent<P, T>(component)

  const With: ComplexFunctionComponent<P & OP> = (props: PropsWithChildren<P & OP>, ref?) => {
    if (draft) {
      return _component(draft(props) as (P & OP), ref)
    }
    return _component(props, ref)
  }

  return componentPostProcessing<P, OP>(With, {...options, assign: component})
}


export const createCurryWith =
  <P extends Record<string, any>, OP extends Record<string, any> = EmptyObject, T = any>(
    component: AllComponentType<P, T>,
    options: CreateWithOptions<P, OP> = {},
  ) => {
    const _options = {...options}
    return <AP extends Record<symbol, any> = EmptyObject>(draft?: (props: PropsWithChildren<P & OP>) => Partial<P> & OP & AP) => {
      return createWith<P, OP, AP, T>(component, _options, draft)
    }
  }
