import { createContext } from 'react'

// 创建 Context 对象
// 调用 React.createContext() 方法创建 Context 对象后
// 返回的结果中有两个组件：
// - Provider - 生产者组件，可以将需要全局共享的数据保存到 Context 中
// - Consumer - 消费者组件，可以从 Context 中获取到需要使用的全局共享数据
const { Provider, Consumer } = createContext()

// 导出生产者与消费者组件
export {
  Provider,
  Consumer
}
