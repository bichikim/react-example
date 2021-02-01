import {FC, createElement as h} from 'react'
import {Box} from '@/ui'

export default {
  title: 'components/box',
}

export const Default: FC = () => {
  return (
    h('div', {},
      h(Box, {bc: 'black', bg: 'primary', bw: 1, m: 10, p: 10}),
    )
  )
}
