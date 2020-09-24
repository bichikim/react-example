import React, {createContext, PropsWithChildren, useContext, useState} from 'react'
import {Flex} from '@/ui/flex'
import {Box} from '@/ui/box'
import {observable, autorun} from 'mobx'
import {observer, useObserver, MobXProviderContext, useLocalStore} from 'mobx-react'
const myShadow = '0px 10px 1px #ddd, 0 10px 20px #ccc'

export default {
  title: 'tests/mobx',
}

const state = observable({
  bar: 4,
  foo: {
    bar: 4,
  },
  john: 6,
})

const addJohn = () => {
  state.john += 1
}

const addBar = () => {
  state.bar += 1
}

const addFooBar = () => {
  state.foo.bar += 1
}

const useStores = () => {
  return useContext(MobXProviderContext)
}

const useStateContext = () => {

  return {
    state,
    addJohn,
    addBar,
    addFooBar,
  }
}

const DefaultComponent = observer(() => {
  return (
    <Flex bg={'WhiteSmoke'} color={'white'} gap={10} inheritItems p={10}>
      <Box bg={'Tomato'}>
        foo.bar:
        {state.foo.bar}
      </Box>
      <Box bg={'Silver'}>
        bar:
        {state.bar}
      </Box>
      <Box bg={'Silver'}>
        john
        {state.john}
      </Box>
      <Box bg={'Silver'} borderRadius={10} boxShadow={myShadow} onTap={addFooBar} whileTap={{scale: 0.8}}
      >
        add foo.bar
      </Box>
    </Flex>
  )
})

export const Default = () => {
  return (
    <DefaultComponent />
  )
}

const InnerComponent = observer(() => {

  return (
    <Flex bg={'WhiteSmoke'} color={'white'} gap={10} inheritItems p={10}>
      <Box bg={'Tomato'} borderRadius={10} boxShadow={myShadow} onTap={addBar} whileTap={{scale: 0.8}}
      >
        add bar
      </Box>
      <Box bg={'Silver'} borderRadius={10} boxShadow={myShadow} onTap={addJohn} whileTap={{scale: 0.8}}>add john</Box>
    </Flex>
  )
})

export const Inner = () => {
  return (
    <InnerComponent/>
  )
}

interface State {
  bar: number
  foo: {bar: number}
  john: number
}

interface ContextComponentProps {
  state?: State,
  addBar?: () => any
  addFooBar?: () => any
  addJohn?: () => any
}

const ContextComponent = (props: PropsWithChildren<ContextComponentProps>) => {
  const mayContext = useStateContext()
  const context = {...mayContext, ...props}

  return useObserver(() =>
    <Flex bg={'WhiteSmoke'} color={'white'} gap={10} inheritItems p={10}>
      <Box bg={'Tomato'}>
        foo.bar:
        {context.state.foo.bar}
      </Box>
      <Box bg={'Silver'}>
        bar:
        {context.state.bar}
      </Box>
      <Box bg={'Silver'}>
        john
        {context.state.john}
      </Box>
      <Box bg={'Silver'} borderRadius={10} boxShadow={myShadow} onTap={context.addFooBar} whileTap={{scale: 0.8}}
      >
        add foo.bar
      </Box>
      <Box bg={'Tomato'} borderRadius={10} boxShadow={myShadow} onTap={context.addBar} whileTap={{scale: 0.8}}
      >
        add bar
      </Box>
      <Box bg={'Silver'} borderRadius={10} boxShadow={myShadow} onTap={context.addJohn} whileTap={{scale: 0.8}}>add john</Box>
    </Flex>
  )
}

export const Context = () => {
  const [state, setState] = useState({
    bar: 4,
    foo: {
      bar: 4,
    },
    john: 6,
  })

  const addJohn = () => {
    setState({
      ...state,
      john: state.john + 1
    })
  }

  const addBar = () => {
    setState({
      ...state,
      bar: state.bar + 1
    })
  }

  const addFooBar = () => {
    setState({
      ...state,
      foo: {
        ...state.foo,
        bar: state.foo.bar + 1
      }
    })
  }

  return (
    <div>
      <ContextComponent/>
      <ContextComponent state={state} addBar={addBar} addFooBar={addFooBar} addJohn={addJohn}/>
    </div>
  )
}
