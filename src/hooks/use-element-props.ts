import {CSSObject} from '@styled-system/css'

export type ClassName = string[] | string | {[key: string]: boolean}

export interface UseElementEventProps{
  onBlur?: () => any
  onClick?: () => any
  onFocus?: () => any
}

export interface UseElementProps {
  alt?: string
  className?: ClassName
  draggable?: boolean
  element?: string
  id?: string
  ref?: any
  style?: string | CSSObject

}

