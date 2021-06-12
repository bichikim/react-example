import React, {FC} from 'react'
import {Box, Flex} from '@/ui/components'

export interface HeaderProps {
  title?: string
}

export const Header: FC<HeaderProps> = (props) => {
  const {title} = props
  return (
    <Box>
      <Box>{title}</Box>
    </Box>
  )
}
