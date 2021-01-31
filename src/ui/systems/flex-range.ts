import css from '@styled-system/css'
import {parallelProps} from 'src/utils'
import {deepMemoize} from '@/utils'
import {ResponsiveValue} from 'styled-system'
import {SystemFunction} from 'src/types'

export type Range = number | 'space' | 'auto' | 'force-space'

export interface DivisionProps {
  /**
   * @default 1
   */
  division?: ResponsiveValue<number>
}

export interface FlexRangeProps extends DivisionProps {
  offset?: ResponsiveValue<Range>
  range?: ResponsiveValue<Range>
}

export interface FlexColumnProps {
  column?: ResponsiveValue<boolean>
  reverse?: ResponsiveValue<boolean>
}

const HUNDRED = 100

export const getOffsetMargin = (column, offset) => {
  if (typeof offset === 'undefined') {
    return {}
  }
  if (column) {
    return {
      marginTop: offset,
    }
  }

  return {
    marginLeft: offset,
  }
}

const getBasis = (division: number, range?: number) => {
  if (range) {
    return `${HUNDRED * (1 / division) * range}%`
  }
  return range
}

const flexRangeCssLogic = deepMemoize(({column, division, offset, range, reverse}) => {
  return css(
    parallelProps(
      {column, division, offset, range, reverse},
      ({column, division, offset, range}) => {
        const margin = getOffsetMargin(column, getBasis(division, offset))

        switch (range) {
          case 'auto':
            return {
              ...margin,
              flexBasis: 'auto',
              flexGrow: 0,
              flexShrink: 0,
            }
          case 'space':
            return {
              ...margin,
              flexBasis: '100%',
              flexGrow: 1,
              flexShrink: 1,
            }
          case 'force-space':
            return {
              ...margin,
              flexBasis: 'auto',
              flexGrow: 1,
              flexShrink: 1,
            }
          default:
            return {
              ...margin,
              flexBasis: getBasis(division, range),
              flexGrow: 0,
              flexShrink: 0,
            }
        }
      },
    ),
  )
}, {maxSize: 5000})

export const flexRange: SystemFunction<FlexRangeProps & FlexColumnProps> =
  (props) => {
    const {range, division, column, reverse, offset} = props
    return flexRangeCssLogic({column, division, offset, range, reverse})
  }
