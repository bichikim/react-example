import {useCallback, useEffect, useRef} from 'react'
import {OnAsyncChange, useAsync} from './use-async'

type Getter<R> = (module: R) => any
type AsyncImport<R> = () => (Promise<R> | R)
type OnImportsChange = (value: Record<string, any>) => any


const defaultGetter = (module) => (module.default || module)

export const useAsyncImport = (importFunc: AsyncImport<any>, onChange: OnAsyncChange, getter: Getter<any> = defaultGetter) => {
  const handleChange = useCallback((value) => {
    onChange(getter(value))
  }, [onChange, getter])
  useAsync(importFunc(), handleChange)
}

interface AsyncImportInfo<R> {
  getter?: Getter<R>
  module: AsyncImport<R>
}

interface AsyncImports {
  [key: string]: AsyncImport<any> | AsyncImportInfo<any>
}

const getImportInfo = (value: AsyncImport<any> | AsyncImportInfo<any>): AsyncImportInfo<any> => {
  if (typeof value === 'function') {
    return {module: value}
  }
  return value
}

export const useAsyncImports = (imports: AsyncImports, onChange: OnImportsChange) => {
  const state = useRef<Record<string, any>>({})
  const onChangeRef = useRef(onChange)
  onChangeRef.current = onChange

  useEffect(() => {
    Object.keys(imports).forEach((key) => {
      const importInfo = imports[key]

      const {module: importFunc, getter: _getter = defaultGetter} = getImportInfo(importInfo)

      useAsyncImport(importFunc, (value) => {
        state.current = {
          ...state.current,
          [key]: value.value,
        }
        onChangeRef.current(state.current)
      }, _getter)
    })
  }, [onChangeRef, imports])


}
