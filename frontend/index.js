import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import App from './containers/App'

import Lists from './views/Lists'
import Todos from './views/Todos'

import configureStore from './store/configureStore'

const store = configureStore()

render(
  <Provider store={store}>
    <Router>
      <Route path='/' component={App}/>
      <Route path='/lists' component={Lists}/>
      <Route path="/list/:listId" component={Todos}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
