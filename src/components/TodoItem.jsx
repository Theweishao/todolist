import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes, { nominalTypeHack } from 'prop-types'
import { removeTodoItemAction, toggleTodoItemAction, changedTodoItemAction } from '../actions/todos'
import { connect } from 'react-redux'
import { Card, Button  } from 'antd';
import 'antd/dist/antd.css';
import './Todoitem.css'

// 待办事项列表项
class TodoItem extends Component {
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool
  }
  static defaultProps = {
    id: 0,
    title: '',
    completed: false
  }
  state = {
    inputValue: this.props.title
  }
  changedValue = event => {
    // 在组件中需要调用 setState() 方法来更新 state
    // 中的状态数据，否则无法响应式渲染
    this.setState({
      inputValue: event.target.value
    })
    console.log(this.state.inputValue)
    console.log(this.props.title)

  }
  render() {
    const { id, title, completed } = this.props
    return (
      <ul>
      <li>
        <>
          <Card className="Card" title="待办事项" extra={<a href="#">{completed?'未':'已'}完成</a>} style={{ width: 300,color: completed ? '#f00' : '#95de64' }}>

          <textarea cols="30" rows="20" value={this.state.inputValue}  onChange={this.changedValue}></textarea>
          
          </Card>
        </>
        <>
          <Button type="primary" onClick={() => { this.props.toggle(id)}}>标记为{completed?'未':'已'}完成</Button>

          <Button type="primary" onClick={() => { this.props.changed(id,this.state.inputValue)}} style={{ float:'right'}}>确定编辑</Button>
          
          <Button type="primary" onClick={() => { this.props.remove(id)}} style={{ float:'right'}}>删除</Button>

        </>
      </li>
      </ul>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggle: id => dispatch(toggleTodoItemAction(id)),
    remove: id => dispatch(removeTodoItemAction(id)),
    changed: (id,title) => dispatch(changedTodoItemAction(id,title))
  }
}
export default connect(null, mapDispatchToProps)(TodoItem)
