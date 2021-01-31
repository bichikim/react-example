import {aroundGap,
  boxDefaultMapper, column, ColumnProps, createBox, createGap, FlexColumnProps, FlexItemProps,
  flexRange, FlexRangeProps, flexWrap, FlexWrapProps, GapProps,
} from '@/ui'

import {system} from 'styled-system'

const basis = system({
  basis: {
    property: 'flexBasis',
    scale: 'sizes',
  },
})

export const _Container = createBox<FlexWrapProps & ColumnProps & GapProps>({
  shouldForwardProp: ['column', 'reverse', 'wrap'],
  styles: [
    {
      '&>*': {
        pointerEvents: 'auto',
      },
      display: 'flex',
      height: '100%',
      pointerEvents: 'none',
      position: 'relative',
    },
    flexWrap,
    column,
    createGap('100%'),
  ],
  systems: {
    flex: true,
    padding: true,
  },
})

export const _Item = createBox<FlexRangeProps & FlexItemProps & FlexColumnProps>({
  shouldForwardProp: ['basis', 'offset'],
  styles: [
    {
      '>*': {
        pointerEvents: 'auto',
      },
      boxSizing: 'border-box',
      display: 'table',
      flexBasis: 'auto',
      flexGrow: 0,
      flexShrink: 1,
      maxWidth: '100%',
      minWidth: 0,
      overflow: 'visible',
      pointerEvents: 'none',
      whiteSpace: 'nowrap',
    },
    flexRange,
    basis,
  ],
  systems: {
    text: true,
  },
})

export const _Layout = createBox({
  styles: [
    {
      display: 'flow-root',
    },
    aroundGap,
  ],
  systems: {
    ...boxDefaultMapper,
    backgroundColor: false,
    flex: false,
    padding: false,
  },

})

export const _Background = createBox({
  styles: [
    {
      height: '100%',
      left: '0',
      pointerEvents: 'none',
      position: 'absolute',
      top: 0,
      width: '100%',
    },
  ],
  systems: {
    backgroundColor: true,
  },
})

