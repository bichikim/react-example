import {act, fireEvent, render} from '@testing-library/react'
import {useHandle} from '../use-handle'
import {createElement as h} from 'react'

describe('use-handle', function test() {
  const setup = (getter?: any) => {
    const HookComponent = jest.fn(({onChange, passBy}) => {
      const handleChange = useHandle(onChange, {
        passBy,
        getter,
      })
      return h('input', {onChange: handleChange, value: ''})
    })
    const onChange = jest.fn(() => {
      // empty
    })
    const passBy = jest.fn(() => {
      // empty
    })
    const wrapper = render(h(HookComponent, {onChange, passBy}))
    const input = wrapper.getByRole('textbox')

    return {
      input,
      passBy,
      onChange,
    }
  }

  it('should serve event with the defaultGetter', function test() {
    const {input, onChange, passBy} = setup()
    const value = 'foo'

    act(() => {
      fireEvent.change(input, {target: {value}})
    })

    const onChangeCall: any[] = onChange.mock.calls[0] || []

    expect(onChangeCall[0]).toBeObject()
    expect(onChangeCall[1]).toBe('foo')

    const passByCall: any[] = passBy.mock.calls[0] || []

    expect(passByCall[0]).toBeObject()
    expect(passByCall[1]).toBe('foo')
  })

  it('should serve event with a getter', function test() {
    const getter = jest.fn((event, value) => {
      if(value) {
        return value
      }

      return event?.target.value + 'bar'
    })
    const {input, onChange, passBy} = setup(getter)
    const value = 'foo'

    act(() => {
      fireEvent.change(input, {target: {value}})
    })

    const onChangeCall: any[] = onChange.mock.calls[0] || []

    expect(onChangeCall[0]).toBeObject()
    expect(onChangeCall[1]).toBe('foobar')
  })

  it('should serve value', function test() {
    const ChildHookComponent = jest.fn(({onChange}) => {
      const handleChange = useHandle(onChange)
      return h('input', {onChange: handleChange, value: ''})
    })
    const HookComponent = jest.fn(({onChange}) => {
      const handleChange = useHandle(onChange)
      return h(ChildHookComponent, {onChange: handleChange, value: ''})
    })
    const onChange = jest.fn(() => {
      // empty
    })
    const wrapper = render(h(HookComponent, {onChange}))
    const input = wrapper.getByRole('textbox')
    const value = 'foo'

    act(() => {
      fireEvent.change(input, {target: {value}})
    })

    const onChangeCall: any[] = onChange.mock.calls[0] || []

    expect(onChangeCall[0]).toBeObject()
    expect(onChangeCall[1]).toBe('foo')
  })
})
