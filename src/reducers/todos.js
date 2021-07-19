// 初始化state对象
// const initState = {
//   todos: Array(7).fill(null).map((v, i) => ({
//     id: i,
//     title: 'reducer中标题' + i,
//     completed: false
//   }))
// }
const initState = sessionStorage.getItem('data') ? JSON.parse(sessionStorage.getItem('data')):{
  todos: Array(7).fill(null).map((v, i) => ({
    id: i,
    title: 'reducer中标题' + i,
    completed: false
  }))
}
  

/**
 * reducer 函数，这个函数是一个纯函数
 * @param {*} state 旧的状态数据
 * @param {*} action 更新状态的动作对象，{type, payload} type表示动作类型，payload表示操作的数据
 * 
 * @return 更新后的新的状态对象
 */
const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TODO_ITEM': // 添加新待办事项
      const adddata = {
        ...state,
        todos: [
          ...state.todos,
          action.payload
        ],
      }
      sessionStorage.setItem('data',JSON.stringify(adddata))
      return adddata
    case 'TOGGLE_TODO_ITEM': // 修改待办事项状态
      const toggledata = {
        ...state,
        todos: state.todos.map(todo => {
          const temp = {...todo} // 纯函数不能造成副作用，所以将数组中的元素值复制一份再操作
          if (temp.id === action.payload) {
            temp.completed = !temp.completed
          }
          return temp
        })
      }
      sessionStorage.setItem('data',JSON.stringify(toggledata))
      return toggledata
    case 'REMOVE_TODO_ITEM': // 删除待办事项
      const removedata = {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
      sessionStorage.setItem('data',JSON.stringify(removedata))
      return removedata
    case 'CHANGED_TODO_ITEM': // 编辑待办事项内容
      const changedata={
        ...state,
          todos: state.todos.map(todo => {
            const temp = {...todo} // 纯函数不能造成副作用，所以将数组中的元素值复制一份再操作
            if (temp.id === action.payload.id) {
              temp.title = action.payload.title
            }
            return temp
          })
      }
      console.log(changedata)
      sessionStorage.setItem('data',JSON.stringify(changedata))
      return changedata
      // return {
      //   ...state,
      //   todos: state.todos.map(todo => {
      //     const temp = {...todo} // 纯函数不能造成副作用，所以将数组中的元素值复制一份再操作
      //     if (temp.id === action.payload.id) {
      //       temp.title = action.payload.title
      //     }
      //     return temp
      //   })
      // }
    default: // 没有满足条件的动作，则直接返回原状态值
      return state
  }
}

export default reducer
