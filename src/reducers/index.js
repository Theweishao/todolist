import { combineReducers } from 'redux'
import todosReducer from './todos'
// import cartReducer from './cart'

// 将各独立的 reducer 合并为一个根 reducer
const rootReducer = combineReducers({
  todos: todosReducer,
  // cart: cartReducer
})

export default rootReducer
