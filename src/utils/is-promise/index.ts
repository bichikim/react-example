/**
 * is promise
 * @param value
 */
export function isPromise(value): value is Promise<any> {
  return Boolean(value && typeof value.then === 'function')
}
