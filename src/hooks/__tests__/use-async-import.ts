import flushPromises from 'flush-promises'
import {useAsyncImport} from '@/hooks'
import {renderHook} from '@testing-library/react-hooks'
const resolveEsModule = () => Promise.resolve({default: 'foo'})
const resolveModule = () => Promise.resolve({foo: 'foo'})

const setup = (module) => {
  const HookComponent = jest.fn(({call, onChange}) => {
    return useAsyncImport(call, onChange)
  })
  const onChange = jest.fn(() => {
    // empty
  })
  const wrapper = renderHook(HookComponent, {initialProps: {call: module, onChange}})

  return {
    ...wrapper,
    onChange,
  }
}

describe('use-async-import', function test() {
  it('should async import', async function test() {
    const {onChange, result} = setup(resolveEsModule)

    expect(onChange.mock.calls.length).toBe(2)
    expect(onChange.mock.calls[0]).toEqual([{state: 'idle', value: null}])
    expect(onChange.mock.calls[1]).toEqual([{state: 'wait', value: null}])
    onChange.mockClear()

    await flushPromises()

    expect(onChange.mock.calls.length).toBe(1)
    expect(onChange.mock.calls[0]).toEqual([{state: 'success', value: 'foo'}])
  })
})
