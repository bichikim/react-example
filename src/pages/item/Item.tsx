import React, {FC} from 'react'
import {UserProps} from '@/templates/User'

export interface ItemProps {
  comments?: number
  createAt?: string
  id?: string
  title?: string
  url?: string
  user?: UserProps
}

export const Item: FC = () => {
  return (
    <div>
      item
    </div>
  )
}
