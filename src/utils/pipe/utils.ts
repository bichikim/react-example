import {kindSym, stateSym} from './symbol'
import {PipeFunc, SpecialKey, State, Trap, Visitant, Wrap} from './types'

export const isTrap = (trap: any): trap is Trap => {
  return trap && trap[kindSym] === 'trap'
}

export const isWrap = (wrap: any): wrap is Wrap<any> => {
  return wrap && wrap[kindSym] === 'wrap'
}

export const createTrap = (func: Trap): Trap => {
  return Object.assign(func, {[kindSym]: 'trap' as const})
}

export const createExecute = (trap?: Trap | null, wrap?: Wrap | null, arg?: any) => {
  return (func: PipeFunc, index: number, specialKey?: SpecialKey) => (visitant: Visitant): Visitant => {
    let state = getState(visitant)
    const _func = wrap ? wrap(func, arg, index, specialKey) : func

    if (state === 'error') {
      return visitant
    }

    const result = _func(visitant.value)

    if (trap) {
      state = trap(result) ? 'success' : 'error'
    }

    return createVisitant(state, result)
  }
}

const getState = (visitant: Visitant): State => {
  return visitant[stateSym]
}

export const createWrap = <R = any>(wrap: Wrap<R>): Wrap<R> => {
  return Object.assign(wrap, {[kindSym]: 'wrap' as const})
}

export const createVisitant = (state: State, value?: any): Visitant => {
  return {
    [stateSym]: state,
    value,
  }
}


