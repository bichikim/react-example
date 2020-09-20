import {FC, createElement as h} from 'react'
import {withComponentSystem} from 'src/with'
import {boxSystem, Props} from './system'
import {motion} from 'framer-motion'
import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'

export type BoxProps = Props

interface BoxMotionProps {
  as?: any
  ref?: any
}

const BoxContainer: FC<BoxMotionProps> = motion.custom(
  styled('div', {shouldForwardProp},
  )(...boxSystem as any))

export const Box = withComponentSystem<BoxProps>((props, ref) => {
  return h(BoxContainer, {...props, ref})
})

Box.displayName = 'Box'

