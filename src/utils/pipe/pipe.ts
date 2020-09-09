import {stateSym} from './symbol'
import {PipeFunc, SpecialKey, Trap, Wrap} from './types'
import {createExecute, createVisitant} from './utils'

export const rawPipe = (
  trap: Trap | null,
  wrap: any | null,
  arg: any | null,
  ...functions: PipeFunc[]
) => {
  const execute = createExecute(trap, wrap, arg)
  let visitant = createVisitant('success', arg)
  const lastKey = functions.length - 1
  let specialKey: SpecialKey | undefined = 'first'
  for (const [index, func] of functions.entries()) {
    if (index === lastKey) {
      specialKey = 'last'
    }
    visitant = execute(func, index, specialKey)(visitant)
    specialKey = undefined
    if (visitant[stateSym] === 'error') {
      return visitant.value
    }
  }
  return visitant.value
}

export function createPipe({trap = null, wrap = null}: {trap?: Trap | null, wrap?: Wrap | null}) {
  return (...functions: PipeFunc[]) => (arg: any = null) =>
    (rawPipe(trap, wrap, arg, ...functions))
}

export const pipe = (...functions: PipeFunc[]) => (arg: any | null) =>
  (rawPipe(null, null, arg, ...functions))
