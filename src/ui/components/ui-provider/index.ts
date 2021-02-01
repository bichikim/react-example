import {FC, createElement as h, ReactNode, useMemo} from 'react'
import {CacheProvider, EmotionCache, ThemeProvider} from '@emotion/react'
import createCache from '@emotion/cache'
import {theme as defaultTheme} from '@/ui'
import {UIDReset} from 'react-uid'
import {GlobalStyle} from '../global'

export interface UIProps {
  $global?: ReactNode
  nonce?: string
  theme?: any
}

const useCache = (nonce?: string): EmotionCache => {
  return useMemo(() => {
    return createCache({
      key: 'css',
      nonce,
    })
  }, [nonce])
}

export const UI: FC<UIProps> = (props) => {
  const {theme = defaultTheme, nonce, children, $global} = props

  const cache = useCache(nonce)

  return (
    h(CacheProvider, {value: cache},
      h(ThemeProvider, {theme},
        h(UIDReset, null,
          $global ?? h(GlobalStyle),
          children,
        ),
      ),
    )
  )
}
