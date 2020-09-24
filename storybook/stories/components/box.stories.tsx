import React, {FC, useState, createElement as h} from 'react'
import {Box} from '@/ui/box'
import {Flex} from '@/ui/flex'
import {AnimateSharedLayout} from 'framer-motion'

export default {
  title: 'components/box',
}

export const Default: FC = () => {
  return (
    <Box bg={'WhiteSmoke'} color={'white'} fw={'bold'} p={10}>
      parent
      <Box bg={'Tomato'}>Foo</Box>
      <Box>Bar</Box>
      <Box bg={'Silver'} size={50}>50x50</Box>
      <Box bg={'Orange'} height={100}>height 100</Box>
    </Box>
  )
}

export const WithInherit: FC = () => {
  console.log('inherit')
  return (
    <Box bg={'WhiteSmoke'} color={'white'} fw={'bold'} inheritItems p={10}>
      parent
      <Box bg={'Tomato'}>Foo</Box>
      <Box>Bar</Box>
    </Box>
  )
}

export const WithFlex: FC = () => {
  return (
    <Flex
      bg={'WhiteSmoke'}
      color={'white'}
      gap={10}
      inheritItems
      inheritProps={{bg: 'Silver'}}
      p={10}
    >
      <Box bg={'Tomato'} range={'space'}>Foo</Box>
      <Box>Bar</Box>
      <Box>John</Box>
    </Flex>
  )
}

export const SwapElement: FC = () => {
  return (
    <Box bg={'WhiteSmoke'} color={'white'} fw={'bold'} inheritItems p={10}>
      parent
      <Box as={'aside'} bg={'tomato'}>Foo</Box>
      <Box as={'header'}>Bar</Box>
    </Box>
  )
}

export const FramerMotion1 = () => {
  return (
    <Flex bg={'WhiteSmoke'} p={10}>
      <Box bg={'tomato'} height={100} range={'space'} whileHover={{width: '100%'}} width={100}/>
    </Flex>

  )
}



export const FramerMotion2 = () => {
  const [state, setState] = useState(false)
  return (
    h(Box, {bg: 'WhiteSmoke', display: 'flex', p: 10},
      h(AnimateSharedLayout, null,
        h(Box, {bg: 'silver', borderRadius: 10, color: 'White', onTap: () => setState(true), p: 10, whileTap: {scale: 0.8}, width: 200},
          state && h(Box, {bg: 'Tomato', borderRadius: 10, className: 'foo', layoutId: 'content', p: 10}, 'bar'),
        ),
        h(Box, {bg: 'silver', borderRadius: 10, color: 'White', onTap: () => setState(false), p: 10, whileTap: {scale: 0.8}, width: 200},
          !state && h(Box, {bg: 'Tomato', borderRadius: 10, layoutId: 'content', p: 10}, 'bar'),
        ),
      ),
    )
  )
}

export const Typography = () => {
  return (
    <Box typography={'heading1'}>
      heading1
    </Box>
  )
}
