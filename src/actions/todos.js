/* 创建 action-creator，用于生成 action 对象 */

/**
 * 用户生成添加待办事项的 action 对象
 * @param {*} title 新待办事项的标题
 */
export const addTodoItemAction = title => {
  return {
    type: 'ADD_TODO_ITEM',
    payload: {
      id: Math.random(),
      title,
      completed: false
    }
  }
}

/**
 * 修改待办事项状态的 action-creator
 * @param {*} id 待修改状态的待办事项 id
 */
export const toggleTodoItemAction = id => {
  return {
    type: 'TOGGLE_TODO_ITEM',
    payload: id
  }
}

/**
 * 删除待办事项状态的 action-creator
 * @param {*} id 待删除状态的待办事项 id
 */
export const removeTodoItemAction = id => {
  return {
    type: 'REMOVE_TODO_ITEM',
    payload: id
  }
}

/**
 * 用户生成编辑待办事项的 action-creator
 * @param {*} title 新待办事项的标题
 */
 export const changedTodoItemAction = (id,title) => {
  return {
    type: 'CHANGED_TODO_ITEM',
    payload: {
      id,
      title,
      completed: false
    }
  }
}