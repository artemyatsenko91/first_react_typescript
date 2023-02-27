import React from 'react';

import { Todo } from '../types';

interface TodoItemProps extends Todo {
    style?: React.CSSProperties;
    toggleTodo: (id: Todo['id']) => void;
    removeTodo: (id: Todo['id']) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
    id,
    title,
    style = {},
    completed,
    removeTodo,
    toggleTodo,
}) => {
    return (
        <li style={{ ...style }}>
            <input
                type='checkbox'
                checked={completed}
                style={{ cursor: 'pointer' }}
                onChange={() => toggleTodo(id)}
            />
            <span style={completed? { textDecoration: "line-through"}: {}}>{title}</span>
            <span
                style={{ color: 'red', marginLeft: '10px', cursor: 'pointer' }}
                onClick={() => removeTodo(id)}
            >
                &times;
            </span>
        </li>
    );
};

export default TodoItem;
