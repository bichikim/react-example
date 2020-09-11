import {useAsync} from '../use-async'
import {act, renderHook} from '@testing-library/react-hooks'
import flushPromises from 'flush-promises'
const resolve = () => Promise.resolve('foo')
const reject = () => Promise.reject('bar')
const setup = () => {
  const HookComponent = jest.fn(({call, onChange}) => {
    return useAsync(call, onChange)
  })
  const onChange = jest.fn(() => {
    // empty
  })
  const {result, rerender} = renderHook(HookComponent, {initialProps: {
    call: resolve, onChange,
  }})

  return {
    onChange, rerender, result,
  }
}
describe('use-async', function test() {

  it('should execute async function', async function test() {
    const {onChange, result} = setup()
    expect(result.current).toBeFunction()

    expect(onChange.mock.calls.length).toBe(2)
    expect(onChange.mock.calls[0]).toEqual([{state: 'idle', value: null}])
    expect(onChange.mock.calls[1]).toEqual([{state: 'wait', value: null}])
    onChange.mockClear()

    await flushPromises()

    expect(onChange.mock.calls.length).toBe(1)
    expect(onChange.mock.calls[0]).toEqual([{state: 'success', value: 'foo'}])
  })
  it('should return result with execute', async function test() {
    const {onChange, result} = setup()
    await flushPromises()
    onChange.mockClear()

    act(() => {
      result.current()
    })

    expect(onChange.mock.calls.length).toBe(1)
    expect(onChange.mock.calls[0]).toEqual([{state: 'wait', value: null}])
    onChange.mockClear()

    await flushPromises()

    expect(onChange.mock.calls.length).toBe(1)
    expect(onChange.mock.calls[0]).toEqual([{state: 'success', value: 'foo'}])
  })
  it('should return error result', async function test() {
    const {onChange, rerender} = setup()
    await flushPromises()
    onChange.mockClear()

    act(() => {
      rerender({
        call: reject, onChange,
      })
    })

    expect(onChange.mock.calls.length).toBe(1)
    expect(onChange.mock.calls[0]).toEqual([{state: 'wait', value: null}])
    onChange.mockClear()

    await flushPromises()

    expect(onChange.mock.calls.length).toBe(1)
    expect(onChange.mock.calls[0]).toEqual([{state: 'error', value: 'bar'}])
  })
})
