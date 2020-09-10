import css, {CSSObject} from '@styled-system/css'
import {SystemFunc} from './types'
import {useMemo} from 'react'


export interface PositionSystemProps {
  reverseX?: boolean
  reverseY?: boolean
  x: number
  y: number
}

export const positionSystem: SystemFunc<PositionSystemProps> = ({
  reverseX = false,
  reverseY = false,
  x = 0,
  y = 0,
}) => {
  return useMemo(() => {
    const style: CSSObject = {}

    if (reverseX) {
      style.right = x
    } else {
      style.left = x
    }

    if (reverseY) {
      style.bottom = y
    } else {
      style.top = y
    }

    return css(style)
  }, [reverseX, reverseY, x, y])
}
