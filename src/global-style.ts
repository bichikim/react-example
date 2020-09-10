import {CSSObject} from '@styled-system/css'
import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle({
  // next div wrapper style
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  body: {
    minWidth: '320px',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
} as CSSObject)
