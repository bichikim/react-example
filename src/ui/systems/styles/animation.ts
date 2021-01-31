import {Property} from 'csstype'
import {ResponsiveValue, system} from 'styled-system'
import {UITheme} from '@/ui'

export interface TransitionProps<T extends UITheme = Required<UITheme>> {
  transition?: ResponsiveValue<Property.Transition, T>
}

export const transition = system<TransitionProps>({
  transition: true,
})
