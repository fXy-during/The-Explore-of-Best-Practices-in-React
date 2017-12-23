import { createActions } from 'redux-actions'
import { TODO_TOGGLE, TODO_DELETE, TODO_ADD } from './actionType.js';
let todoCount = 0;


export default createActions({
  TODO_ADD: [text => ({ text, id: todoCount++, done: false }), req => req],
  TODO_TOGGLE: [id => ({ id }), req => req],
  TODO_DELETE: [id => ({ id }), req => req]
});

// export const toggleTodo = id => ({
//   type: actionType.TODO_TOGGLE,
//   id
// });

// export const deleteTodo = id => ({
//   type: actionType.TODO_DELETE,
//   id
// });

// export const addTodo = text => ({
//   type: actionType.TODO_ADD,
//   id: todoCount++,
//   done: false,
//   text
// });
