import React from 'react'

/**
 * 高阶组件，添加底部版权声明
 * @param {*} InComponent 传递的组件参数
 * 
 * @return 返回新生成的组件
 */
const withCopyright = InComponent => {
  // 自定义的一个新组件
  class OutComponent extends React.Component {
    render() {
      return (
        <>
          <InComponent title="这是高阶组件中传递的 title" />
          <div>Copyright © 2020 版权声明</div>
        </>
      )
    }
  }
  // 返回新的组件
  return OutComponent
}

export default withCopyright
