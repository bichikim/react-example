import {css, Global} from '@emotion/react'
import {createElement as h} from 'react'
import {CSSObject} from 'src/types'

const system: CSSObject = {
  body: {
    overflowX: 'hidden',
  },
  button: {
    outline: '0 !important',
  },
  li: {
    listStyleType: 'none',
  },
  ul: {
    listStyleType: 'none',
  },
}

const styles = css(system as any)

export const GlobalStyle = () => {
  return (
    h(Global, {styles})
  )
}
