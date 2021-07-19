import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 头，class 组件
class TodoHeader extends Component {
  // 静态属性：运行时类型检查
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.any
  }

  // 静态属性：设置 prop 属性的默认值
  static defaultProps = {
    title: '主标题',
    subtitle: '副标题'
  }

  render() {
    const {title, subtitle, children } = this.props
    return (
      <div>
        {
          children
            ?
            children
            :
            <>
              <h1>{ title }</h1>
              <h2>{ subtitle }</h2>
            </>
        }
      </div>
    )
  }
}

// TodoHeader.defaultProps = {}

export default TodoHeader
