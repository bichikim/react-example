import React, {FC} from 'react'
import {fetchIssuesOpen} from '@/atoms/api'
import {useAtom} from 'jotai'
import {withAsyncAtom} from '@/with/with-async-atom'

export interface ListProps {
  id?: string
}

export const ListContent: FC<ListProps> = (props) => {
  const [list] = useAtom(fetchIssuesOpen)
  console.log(list)
  return (
    <div>
      list
    </div>
  )
}


export const List = withAsyncAtom(ListContent, <span>loading...</span>)
