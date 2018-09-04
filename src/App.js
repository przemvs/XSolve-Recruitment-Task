import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'
import {history} from './state/store'
import User from 'views/User'

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/users/0" />} />
        <Route exact path="/users/:id" component={User} />
        <Route path="*" render={() => <Redirect to="/users/0" />} />
      </Switch>
    </ConnectedRouter>
  )
}

export default App
