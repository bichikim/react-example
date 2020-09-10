import {show, ShowProps} from '@/systems'
import {FC} from 'react'
import styled from 'styled-components'
import fluid from 'fluid-system'
import {border, BorderProps, compose, layout, LayoutProps, shadow, ShadowProps} from 'styled-system'

type FlexLayoutProps = BorderProps & LayoutProps & ShadowProps
  & ShowProps & JSX.IntrinsicElements['div']

export const FlexLayout: FC<FlexLayoutProps> = styled('div')(
  {
    display: 'flow-root',
    height: '100%',
    position: 'relative',
    width: '100%',
  },
  show,
  fluid(compose(layout, shadow, border)),
)
