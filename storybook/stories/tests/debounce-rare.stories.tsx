import {createStore} from '@/utils/rare'
import React from 'react'
import {Flex} from '@/ui/flex'
import {Box} from '@/ui/box'

export default {
  title: 'tests/debounce-rare',
}

const {store, useStore} = createStore({
  bar: 4,
  foo: {
    bar: 4,
  },
  john: 6,
}, {debounce: true})

const {useStore: useLazyStore, store: lazyStore} = createStore({
  foo: 5,
}, {debounce: 2000})

const addJohn = () => {
  store.setState((draft) => {
    draft.john += 1
  })
}

const addLazyFoo = () => {
  lazyStore.setState((draft) => {
    draft.foo += 1
  })
}

const addFooBar = () => {
  store.setState((draft) => {
    draft.foo.bar += 1
  })
}

const addBar = () => {
  store.setState((draft) => {
    draft.bar += 1
  })
}

const myShadow = '0px 10px 1px #ddd, 0 10px 20px #ccc'

export const Default = () => {
  const [state] = useStore()
  const [lazyState] = useLazyStore()
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
        john:
        {state.john}
      </Box>
      <Box bg={'Silver'}>
        lazyFoo
        {lazyState.foo}
      </Box>
      <Box bg={'Silver'} borderRadius={10} boxShadow={myShadow} onTap={addFooBar} whileTap={{scale: 0.8}}
      >
        add foo.bar
      </Box>
    </Flex>

  )
}

export const Inner = () => {
  const setState = useStore()[1]

  return (
    <Flex bg={'WhiteSmoke'} color={'white'} gap={10} inheritItems p={10}>
      <Box bg={'Tomato'} borderRadius={10} boxShadow={myShadow} onTap={addBar} whileTap={{scale: 0.8}}
      >
        add bar
      </Box>
      <Box bg={'Silver'} borderRadius={10} boxShadow={myShadow} onTap={addJohn} whileTap={{scale: 0.8}}>add john</Box>
    </Flex>
  )
}
export const LongLazy = () => {
  const [state, setState] = useLazyStore()

  return (
    <Flex bg={'WhiteSmoke'} color={'white'} gap={10} inheritItems p={10}>
      <Box bg={'Tomato'}>
        {state.foo}
      </Box>
      <Box bg={'Silver'} borderRadius={10} boxShadow={myShadow} onTap={addLazyFoo} whileTap={{scale: 0.8}}
      >
        add long foo
      </Box>
    </Flex>
  )
}
