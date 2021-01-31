import css from '@styled-system/css'
import {deepMemoize, parallelProps} from 'src/utils'

const gapLogic = ({gap, column, gapStrategy}) => {
  const style = {}

  if (gapStrategy === 'around' && !column) {
    Object.assign(style, {
      paddingLeft: gap,
      paddingRight: gap,
    })
  }

  if (gapStrategy === 'around' && column) {
    Object.assign(style, {
      paddingBottom: gap,
      paddingTop: gap,
    })
  }

  return style
}

const gapCssLogic = deepMemoize(({gap, column, gapStrategy}) =>
  css(parallelProps({column, gap, gapStrategy}, gapLogic)), {maxSize: 1000})

export const aroundGap = ({gap, column, gapStrategy}) => {
  return gapCssLogic({column, gap, gapStrategy})
}
