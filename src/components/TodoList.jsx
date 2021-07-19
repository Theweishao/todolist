import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'

// 列表
class TodoList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.todos.map(todo => (<TodoItem key={todo.id} {...todo} />))
        }
      </ul>
    )
  }
}

// 连接当前组件与 store
// 使用 react-redux 绑定库中的 connect() 方法
const mapStateToProps = state => {
  return {
    todos: state.todos.todos // state.todos 代表的是在合并根reducer时取的名称，通过它拿到整个todosReducer中的state对象
  }
}
// connect() 调用后返回的是一个 HOC
const hoc = connect(mapStateToProps)
// 将 TodoList 作为 HOC 的参数
export default hoc(TodoList)
