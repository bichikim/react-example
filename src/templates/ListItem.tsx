import React, {FC} from 'react'
import {Box} from '@/ui/components'

export interface ListItemProps {
  author?: string
  comments?: string
  createAt?: string
  number?: string
  title?: string
}

export const ListItem: FC<ListItemProps> = (props) => {
  const {title, number, comments, createAt, author} = props
  return (
    <Box>
      <Box>
        {title}
      </Box>
      <Box>
        {number}
      </Box>
      <Box>
        {comments}
      </Box>
      <Box>
        {createAt}
      </Box>
      <Box>
        {author}
      </Box>
    </Box>
  )
}
