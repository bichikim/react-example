import {createElement as h} from 'react'
import {UI} from '@/ui'
import {DocsPage} from '@storybook/addon-docs/blocks'

export const decorators = [
  (Story) => (
    h(UI, null,
      h(Story),
    )
  ),
]

export const parameters = {
  docs: {
    page: () => h(DocsPage, {subtitleSlot: ({kind}) => `Subtitle: ${kind}`}),
  },
  // what do i want to show first
  viewMode: 'docs',
}
