import * as actionType from "./actionType";
import { handleActions } from "redux-actions";

const initTodoState = [];
const { TODO_TOGGLE, TODO_DELETE, TODO_ADD } = actionType;

const _reducer = handleActions(
  {
    TODO_ADD: (state, action) => {
      console.log("redux-actions", action);
      return [...state, action.payload];
    },
    TODO_TOGGLE: (state, action) =>
      state.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, done: !item.done };
        } else {
          return item;
        }
      }),
    TODO_DELETE: (state, action) =>
      state.filter(item => item.id !== action.payload.id)
  },
  initTodoState
);

// const reducer = (state = [], action) => {
//   // console.log(state);
//   switch (action.type) {
//     case actionType.TODO_ADD: {
//       return [
//         ...state,
//         { text: action.text, id: action.id, done: action.done }
//       ];
//     }
//     case actionType.TODO_TOGGLE: {
//       return state.map(item => {
//         if (item.id === action.id) {
//           return { ...item, done: !item.done };
//         } else {
//           return item;
//         }
//       });
//     }
//     case actionType.TODO_DELETE: {
//       return state.filter(item => item.id !== action.id);
//     }
//     default:
//       return state;
//   }
// };

export default _reducer;
