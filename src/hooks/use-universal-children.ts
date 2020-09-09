import {cloneElement, isValidElement, ReactChild, ReactNode} from 'react'

export type FunctionChild<P extends Record<string, any>> = (props: P) => ReactChild

export type FunctionNode<P extends Record<string, any>> = FunctionChild<P> | (FunctionChild<P>)[] | {[key: string]: FunctionChild<P>}

const resolveChild = (child: FunctionChild<any>, _props, index?: number | string) => {
  if (typeof child !== 'function') {
    return child
  }
  const result = child(_props)
  if (isValidElement(result) && typeof index !== 'undefined') {
    const props = result.props || {}
    return cloneElement(result, {...props, key: `.${String(index)}`})
  }
  return result
}

export type UseFunctionChildrenResult = [ReactNode, {[key: string]: ReactNode | undefined}]

export const useUniversalChildren = <P extends Record<string, any>>(children: ReactNode | FunctionNode<P>, props?: P): UseFunctionChildrenResult => {
  const _props: P = props || {} as P
  if (typeof children === 'function') {
    return [children(_props), {}]
  }
  if (Array.isArray(children)) {
    const _children = (children as (FunctionChild<P>)[]).map((child, index) => {
      return resolveChild(child, _props, index)
    })
    return [_children, {}]
  }

  if (typeof children === 'object' && children !== null && !children['$$typeof']) {
    const _children = children as {[key: string]: FunctionChild<P>}
    const slots = Object.keys(_children).reduce((result, key) => {
      const child = _children[key]
      result[key] = resolveChild(child, _props)
      return result
    }, {default: null})

    return [slots.default, slots]
  }

  return [children, {}]
}
