import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { addTodoItemAction } from '../actions/todos'
import './Todoinput.css'

class TodoInput extends Component {

  state = {
    inputValue: 'abc'
  }

  // 对象属性：创建 Ref 对象
  inputRef = createRef()

  /**
   * 修改输入值
   */
  changeInputValueHandler = event => {
    // 在组件中需要调用 setState() 方法来更新 state
    // 中的状态数据，否则无法响应式渲染
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    return (
      <div className="main">
        {/* <span>num:{this.state.num}</span> */}
        <input
          type="text"
          placeholder="请输入新待办事项"
          value={this.state.inputValue}
          onChange={this.changeInputValueHandler}
          // ref="inputRef"
          ref={this.inputRef}
        />
        <button onClick={() => {
          // 添加
          this.props.add(this.state.inputValue)
          // 清空输入框
          this.setState({
            inputValue: ''
          })
          // 获得焦点
          this.inputRef.current.focus()
        }}>添加</button>
      </div>
    )
  }
}

// 将当前 TodoInput 组件与 store 连接
const mapStateToProps = null // 将状态数据映射到组件的属性中
const mapDispatchToProps = dispatch => { // 将分发action的动作方法映射到组件的属性中
  return {
    add: title => dispatch(addTodoItemAction(title))
  }
}
// connect() 连接
const hoc = connect(mapStateToProps, mapDispatchToProps)
// 导出新组件
export default hoc(TodoInput)
