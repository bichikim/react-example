export type OnChange<E extends Event, V = any> = (event: E, value: V) => any
export type Getter<E extends Event, V = any> = (event: E, value: any) => V
export type PassBy<E extends Event, V = any> = (event: E, value: V) => any

interface UseHandleOptions<E extends Event, V = any> {
  getter?: Getter<E, V>
  passBy?: PassBy<E, V>
  prevent?: boolean
  stop?: boolean
}

const getValue = <E extends Event, V = any>(
  event: E, value: V, getter: Getter<E, V>,
) => {
  return getter(event, value)
}

const defaultGetter = <E extends Event, V = any>(event: E, value: V) => (value ?? (event?.target as any)?.value)

export const useHandle = <E extends Event, V = any>(
  onChange?: OnChange<E, V>,
  options: UseHandleOptions<E, V> = {},
) => {
  const {prevent = false, getter = defaultGetter, passBy, stop} = options

  return (event: E, value?: any) => {
    const _value = getValue(event, value, getter)

    if (typeof onChange === 'function') {
      onChange(event, _value)
    }

    if (typeof passBy === 'function') {
      passBy(event, _value)
    }

    if (prevent && event?.preventDefault) {
      event.preventDefault()
    }

    if (stop && event?.stopPropagation) {
      event.stopPropagation()
    }
  }
}
