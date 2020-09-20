import React, {FC} from 'react'
import {Box} from '@/ui/box'
import {Flex} from '@/ui/flex'

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

export const Motion = () => {
  return (
    <Flex bg={'WhiteSmoke'} p={10}>
      <Box bg={'tomato'} height={100} range={'space'} whileHover={{width: '100%'}} width={100}/>
    </Flex>

  )
}

export const Typography = () => {
  return (
    <Box typography={'heading1'}>
      heading1
    </Box>
  )
}
