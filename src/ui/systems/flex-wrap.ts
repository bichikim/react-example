import {Property} from 'csstype'
import {ResponsiveValue, style} from 'styled-system'
import {SystemFunction} from '@/types'

export interface FlexWrapProps {
  wrap?: ResponsiveValue<Property.FlexWrap | boolean>
}

export const flexWrap: SystemFunction<FlexWrapProps> = style({
  cssProperty: 'flexWrap',
  prop: 'wrap',
  transformValue(value: boolean) {
    switch (value) {
      case true:
        return 'wrap'
      case false:
        return 'no-wrap'
    }
    return value
  },
})
