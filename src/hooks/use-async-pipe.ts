import {useMemo, useRef} from 'react'
import {createAsyncPipe, PipeFunc, Trap, Wrap} from '../utils/pipe'

export interface AsyncOptions {
  trap?: Trap
  wrap?: Wrap<any>
}

export interface AsyncWatchOptions extends AsyncOptions {
  disabled?: boolean
}

type onPipeChange = (value: any) => any

/**
 * @param pipes
 * @param onChange
 * @param options AsyncOptions
 */
export const useAsyncPipe = (pipes: PipeFunc[], onChange: onPipeChange, options: AsyncOptions) => {
  const {trap, wrap} = options
  const onChangeRef = useRef(onChange)
  onChangeRef.current = onChange

  // async pipe with tarp and wrap
  const asyncPipe = useMemo(() => {
    return createAsyncPipe({trap, wrap})
  }, [trap, wrap])

  // pipe execute function
  return useMemo<((value) => any)>(() => {
    const pipeExecute = asyncPipe(...pipes)
    return (value) => {
      return pipeExecute(value).then((state) => {
        onChangeRef.current(state)
      })
    }
  }, [asyncPipe, pipes, onChangeRef])
}
