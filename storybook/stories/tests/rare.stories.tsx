import {createStore} from '@/utils/rare'
import React from 'react'
import {Flex} from '@/ui/flex'
import {Box} from '@/ui/box'

export default {
  title: 'tests/rare',
}

const {store, useStore} = createStore({
  bar: 4,
  foo: {
    bar: 4,
  },
  john: 6,
})

const addJohn = () => {
  store.setState((draft) => {
    draft.john += 1
  })
}

const myShadow = '0px 10px 1px #ddd, 0 10px 20px #ccc'

export const Default = () => {
  const [state, setState] = useStore()
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
      <Box bg={'Silver'} borderRadius={10} boxShadow={myShadow} onTap={() => (setState((draft) => {
        draft.foo.bar += 1
      }))} whileTap={{scale: 0.8}}
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
      <Box bg={'Tomato'} borderRadius={10} boxShadow={myShadow} onTap={() => (setState((draft) => {
        draft.bar += 1
      }))} whileTap={{scale: 0.8}}
      >
        add bar
      </Box>
      <Box bg={'Silver'} borderRadius={10} boxShadow={myShadow} onTap={addJohn} whileTap={{scale: 0.8}}>add john</Box>
    </Flex>
  )
}
