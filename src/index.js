import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { 
  HashRouter as Router, // BrowserRouter
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom'

import store from './store'
import TodoListApp from './views/todo-list/TodoListApp'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {/* <div>这是头</div> */}
      <div>
        <TodoListApp />
      </div>
      {/* <div>这是尾</div> */}
    </Router>
  </Provider>,
  document.querySelector('#root')
)
