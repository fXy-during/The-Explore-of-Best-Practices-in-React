import React from 'react';
import TodoList from './View/TodoList';
import TodoInput from './View/TodoInput'
import reducer from "./reducer";

const Todo = () => {
    return (
        <div>
            <TodoInput/>
            <TodoList/>
        </div>
    )
}


export { Todo, reducer };
