import {createElement as h} from 'react'
import {withComponentSystem} from 'src/with'
import {BoxContainer, BoxContainerProps} from '../pieces'

export type BoxProps = BoxContainerProps

export const Box = withComponentSystem<BoxProps>(
  (props, ref) => {
    return h(BoxContainer, {...props, ref})
  },
)

Box.displayName = 'Box'
