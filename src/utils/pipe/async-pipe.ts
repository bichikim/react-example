import {PipeFunc, PipeMayAsyncFunc, SpecialKey, Trap, Wrap} from './types'
import {createExecute, createVisitant} from './utils'

export const rawAsyncPipe = async (
  trap: Trap | null,
  wrap: Wrap<any> | null,
  arg: any | null,
  ...functions: PipeFunc[]
) => {
  const execute = createExecute(trap, wrap, arg)
  let specialKey: SpecialKey | undefined = 'first'
  const lastKey = functions.length - 1

  const result = await functions.reduce((promise, func: PipeMayAsyncFunc, index) => {
    if (index === lastKey) {
      specialKey = 'last'
    }
    const next = promise.then(execute(func, index, specialKey))
    specialKey = undefined
    return next
  }, Promise.resolve(createVisitant('success', arg)))

  return result.value
}

export function createAsyncPipe({wrap = null, trap = null}: {trap?: Trap | null, wrap?: Wrap | null}) {
  return (...functions: PipeFunc[]) => (arg: any = null) =>
    (rawAsyncPipe(trap, wrap, arg, ...functions))
}

export const asyncPipe = (...functions: PipeFunc[]) => (arg: any | null) =>
  (rawAsyncPipe(null, null, arg, ...functions))
