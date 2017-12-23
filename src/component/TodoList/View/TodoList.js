import React from "react";
import { connect } from "react-redux";
import { TODO_All, TODO_ING, TODO_Done } from "../selectType";
import actions from "../action";

import Item from "./TodoItem";

// console.log(_toggleTodo(10));
// console.log(toggleTodo(12));

const ItemList = ({
  todos = [],
  onHandleDone,
  onHandleDelete,
  onTestDispatch
}) => {
  // console.log("todos", todos);
  // console.log("state", state);
  return (
    <div>
      <button onClick={onTestDispatch}>Click Me</button>
      {todos.map((item, index) => (
        <Item
          {...item}
          onHandleDoneAction={() => onHandleDone(item.id)}
          onHandleDeleteAction={() => onHandleDelete(item.id)}
          key={index}
        />
      ))}
    </div>
  );
};

function selectTodo(todos, filter) {
  switch (filter) {
    case TODO_All: {
      return todos;
    }
    case TODO_Done: {
      return todos.filter(item => item.done);
    }
    case TODO_ING: {
      return todos.filter(item => !item.done);
    }
    default:
      return todos;
  }
}

function mapState(state) {
  const filter_check = state.filter;
  return {
    todos: selectTodo(state.todos, filter_check),
  };
}

function mapDispatch(dispatch) {
  return {
    onHandleDone: id => {
      dispatch(actions.todoToggle(id));
    },
    onHandleDelete: id => {
      console.log(id);
      dispatch(actions.todoDelete(id));
    },
    onTestDispatch: () => {
      dispatch({ type: "TODO_TOGGLE", payload:{id: 0 } });
    }
  };
}

export default connect(mapState, mapDispatch)(ItemList);
