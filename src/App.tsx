import React, { useState } from 'react';
import './App.css';

import { Todo } from './types';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (text: string) => {
        const Todo: Todo = {
            completed: false,
            id: new Date().toISOString(),
            title: text,
        };
        setTodos([Todo, ...todos]);
    };

    const toggleTodo = (id: Todo['id']) => {
        setTodos(
            todos.map((item) => {
                if (item.id !== id) {
                    return item;
                }
                return {
                    ...item,
                    completed: !item.completed,
                };
            })
        );
    };

    const removeTodo = (id: Todo['id']) => {
        setTodos(todos.filter((item) => item.id !== id));
    };

    return (
        <div className='App'>
            <NewTodoForm handleClick={addTodo} />
            <TodoList data={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        </div>
    );
}

export default App;
