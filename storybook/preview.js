import {ThemeProvider} from 'styled-components'
import {Fragment, createElement as h} from 'react'
import {GlobalStyle} from '@/global-style'
import {DocsPage} from '@storybook/addon-docs/blocks'

export const decorators = [
  (Story) => (
    h(Fragment, null,
      h(GlobalStyle),
      h(ThemeProvider, {theme: {}},
        h(Story),
      ),
    )
  ),
]

export const parameters = {
  docs: {
    page: () => h(DocsPage, {subtitleSlot: ({kind}) => `Subtitle: ${kind}`}),
  },
  exportedParameter: 'exportedParameter',
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, {numeric: true}),
  },
  // what do i want to show first
  viewMode: 'docs',
}
