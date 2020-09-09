import {stateSym} from './symbol'

export type SpecialKey = 'first' | 'last'

export type Wrap<R = any> = (func: PipeFunc<R>, arg: any, index: number, specialKey?: SpecialKey) => PipeFunc<R>

export type Trap<R = any> = (result: R) => boolean

export type State = 'error' | 'success'

export type PipeFunc<R = any> = (arg: any) => R

export interface Visitant {
  [stateSym]: State
  value: any
}

export type PipeMayAsyncFunc = (...args: any[]) => any | PromiseLike<any>
