import React, { Component } from 'react'
import TodoHeader from '../../components/TodoHeader'
import TodoInput from '../../components/TodoInput'
import TodoList from '../../components/TodoList'
import withCopyright from '../../with-copyright'

class TodoListApp extends Component {

  render() {
    return (
      <div>
        {/* <TodoHeader /> */}
        <TodoInput />
        <TodoList />
      </div>
    )
  }
}

// export default withCopyright(TodoListApp)
export default TodoListApp
