import {PipeFunc, Wrap} from './types'

export const createDeliverArg = () => {
  let _arg
  return (pipeFunc: PipeFunc) => (arg): any => {
    if (!_arg) {
      _arg = arg
    }
    return pipeFunc(_arg)
  }
}

export const deliverArgWrap: Wrap = (pipeFunc: PipeFunc, arg) => {
  return (): any => {
    return pipeFunc(arg)
  }
}
