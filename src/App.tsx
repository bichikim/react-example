import {titleAtom} from '@/atoms/layout'
import {Layout} from '@/layout/Layout'
import {Item} from '@/pages/item/Item'
import {List} from '@/pages/List'
import {Provider, useAtom} from 'jotai'
import React, {FC} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

export const App: FC = () => {
  const [title] = useAtom(titleAtom)
  return (
    <Provider>
      <BrowserRouter>
        <Layout title={title}>
          <Switch>
            <Route component={List} exact path={'/'}/>
            <Route component={Item} path={'/item:id'}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}
