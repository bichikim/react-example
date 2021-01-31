import css from '@styled-system/css'
import {parallelProps} from 'src/utils'
import {SystemFunction} from 'src/types'
import {deepMemoize} from '@/utils'
import {ResponsiveValue} from 'styled-system'

export interface ColumnProps {
  column?: ResponsiveValue<boolean>
  /**
   * todo 잘되는 지 확인
   * reverse ordering
   */
  reverse?: ResponsiveValue<boolean>
}

const columnCssLogic = deepMemoize(({column, reverse}) => {
  return css(parallelProps({column, reverse}, ({column, reverse}) => {
    const flexDirection = [column ? 'column' : 'row']

    if (reverse) {
      flexDirection.push('reverse')
    }

    return {
      flexDirection: flexDirection.join('-'),
    }
  }))
}, {maxSize: 10})

export const column: SystemFunction<ColumnProps> = (props: ColumnProps) => {
  const {column, reverse} = props
  return columnCssLogic({column, reverse})
}
