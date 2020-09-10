import {flexRange, FlexRangeProps, show, ShowProps} from '@/systems'

import {FC} from 'react'
import styled from 'styled-components'
import {system, typography, TypographyProps} from 'styled-system'

export type FlexItemProps = FlexRangeProps & ShowProps & TypographyProps

export const FlexItem: FC<any> = styled('div')(
  {
    boxSizing: 'border-box',
    display: 'block',
    flexBasis: 'auto',
    flexGrow: 0,
    flexShrink: 1,
    maxWidth: '100%',
    minWidth: 0,
    whiteSpace: 'nowrap',
  },
  typography,
  flexRange,
  show,
  system({
    basis: {
      property: 'flexBasis',
    },
  }),
)
