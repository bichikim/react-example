import {useBlurAll} from '@/hooks'
import {renderHook, act} from '@testing-library/react-hooks'
import flushPromises from 'flush-promises'

const setup = () => {
  const HookComponent = jest.fn(() => {
    return useBlurAll()
  })

  const wrapper = renderHook(HookComponent, {initialProps: {}})

  return {
    ...wrapper,
  }
}
describe('use-blur-all', function test() {
  it('should blur all', function test() {
    const {result} = setup()
    expect(result.current).toBeFunction()
    // const element = document.createElement('div')
    // document.body.appendChild(element)
    // element.focus()
    // console.log(document.activeElement === element)
  })
})
