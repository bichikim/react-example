import React, {FC} from 'react'

export interface UserProps {
  avatar?: string
  id?: string
  name?: string
}

export const User: FC<UserProps> = () => {
  return (
    <div>
      user
    </div>
  )
}
