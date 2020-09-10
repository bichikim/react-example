import fluid from 'fluid-system'
import {FC} from 'react'
import styled from 'styled-components'
import {color, ColorProps} from 'styled-system'


export type FlexBackgroundProps = ColorProps & JSX.IntrinsicElements['div']

export const FlexBackground: FC<any> = styled('div')({
  height: '100%',
  left: 0,
  position: 'absolute',
  top: 0,
  width: '100%',
},
fluid(color),
)
