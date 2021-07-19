import { createStore } from 'redux'
import reducer from '../reducers'

// 创建 Store
const store = createStore(reducer)

export default store
