import * as React from 'react'
import {render} from 'react-dom'
import {Frame} from 'framer'
import {} from 'framer-motion'

export function App() {
  return (
    <Frame
      background={'#242424'}
      height={'100%'}
      name={'SliderApp'}
      width={'100%'}
    >
      <Frame
        center
        image={'https://static.framer.com/api/logo.jpg'}
        radius={4}
      />
    </Frame>
  )
}

render(<App/>, document.querySelector('#root'))
