import { Todo } from '../types';
import TodoItem from './TodoItem';

interface TodoItemProps {
    toggleTodo: (id: Todo['id']) => void;
    removeTodo: (id: Todo['id']) => void;
    data: Todo[];
}

const TodoList: React.FC<TodoItemProps> = (props) => {
    return (
        <ul style={{ listStyle: 'none' }}>
            {props.data?.map(
                (item, index): JSX.Element => (
                    <TodoItem
                        key={index}
                        completed={item.completed}
                        id={item.id}
                        title={item.title}
                        removeTodo={props.removeTodo}
                        toggleTodo={props.toggleTodo}
                    />
                )
            )}
        </ul>
    );
};

export default TodoList;
