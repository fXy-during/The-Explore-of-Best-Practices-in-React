import React from 'react';
import { view as TodoFilter } from './Filter'
import { Todo } from './TodoList';


const TodoWrap = () => {
    return (
        <div>
            <Todo/>
            <TodoFilter/>
        </div>
    )
}

export default TodoWrap;