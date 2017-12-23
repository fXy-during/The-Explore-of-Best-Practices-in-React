import React from 'react';

const TodoItem = ({ text, done, onHandleDoneAction, onHandleDeleteAction }) => {
  const itemStyle = {
    textDecoration: "lineThrough"
        // textDecoration: lineThrough;
  };
  return (
    <p>
      <span style={done ? itemStyle : {}}>{text}</span>
      <button onClick={onHandleDoneAction}>{done ? "未完成" : "完成"}</button>
      <button onClick={onHandleDeleteAction}>删除</button>
    </p>
  );
};

export default TodoItem;