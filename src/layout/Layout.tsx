import React, {FC} from 'react'
import {Box, Flex} from '@/ui/components'
import {Header} from '@/templates/Header'

export interface LayoutProps {
  title?: string
}

export const Layout: FC<LayoutProps> = (props) => {
  const {children, title = 'unknown'} = props
  return (
    <Box>
      <Header title={title}/>
      {children}
    </Box>
  )
}
