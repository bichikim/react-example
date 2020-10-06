import React, {FC, memo, useCallback, useRef, useState, useContext, createContext} from 'react'
import {usePrevious} from 'src/hooks/use-previous'
import rfc from 'react-fast-compare'

const pp = createContext<{text?: string | number}>({})


const n = (old, next) => {
  const {children: oldChildren, ..._old} = old
  const {children: nextChildren, ..._next} = next

  const type = typeof nextChildren

  if (type === 'object') {
    console.log('isv')
    return rfc(_old, _next)
  }

  return rfc(old, next)
}

export default {
  title: 'tests/rerender',
}

const Foo: FC = memo((props) => {
  const {children} = props
  const prve = usePrevious(props)
  console.log('foo rerendered', n(prve, props))
  return <div>{children}</div>
}, rfc)

const Bar: FC = memo((props) => {
  const {children} = props
  const prve = usePrevious(props)
  console.log('bar rerendered', n(prve, props))
  return <div>{children}</div>
}, rfc)

const John: FC<{text?: string | number}> = memo((props) => {
  const {children} = props
  // const {text} = useContext(pp)
  console.log('john rerendered')
  return <div>{children}</div>
}, rfc)

export const Default = () => {
  const [count, setCount] = useState(0)
  return (
    <pp.Provider value={{text: count}}>
      <Foo>
        <button onClick={() => setCount(count + 1)}>add</button>
        {count}
        <Bar>
          <John>
            hi?
          </John>
        </Bar>
      </Foo>
    </pp.Provider>
  )
}
