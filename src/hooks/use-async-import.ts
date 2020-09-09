import {useCallback, useRef} from 'react'
import {OnChange, useAsync} from './use-async'

type Getter<R> = (module: R) => any
type AsyncImport<R> = () => (Promise<R> | R)
type OnImportsChange = (value: Record<string, any>) => any


const defaultGetter = (module) => (module.default || module)

export const useAsyncImport = (importFunc: AsyncImport<any>, onChange: OnChange, getter: Getter<any> = defaultGetter) => {
  const handleChange = useCallback((value) => {
    onChange(getter(value))
  }, [onChange, getter])
  useAsync(importFunc(), handleChange)
}

interface AsyncImportInfo<R> {
  module: AsyncImport<R>
  getter?: Getter<R>
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

export const useAsyncImports = (imports: AsyncImports, onChange: OnImportsChange, getter: Getter<any> = defaultGetter) => {
  const state = useRef<Record<string, any>>({})

  Object.keys(imports).forEach((key) => {
    const importInfo = imports[key]

    const {module: importFunc, getter: _getter} = getImportInfo(importInfo)

    useAsyncImport(importFunc, (value) => {
      state.current = {
        ...state.current,
        [key]: value.value,
      }
      onChange(state.current)
    }, _getter)
  })
}
