import React from 'react'
import {Box, Flex} from '@/ui/components'

export function App() {
  return (
    <Box>
      <Flex bg='blue' p={10}>
        <Box bg='red' p={10} range='space'>
          bar
        </Box>
        <Box bg='yellow' p={10}>
          foo
        </Box>
      </Flex>
      <Flex bg='blue' division={12}>
        <Box bg='red' offset={2} p={10} range={8}>
          bar
        </Box>
      </Flex>
    </Box>
  )
}
