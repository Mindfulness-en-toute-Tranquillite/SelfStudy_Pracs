import { useState } from "react";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [newTodo, setNewTodo] = useState('');
    
    const addTodo = () => {
        if (newTodo.trim() === '') return;

        const newTodoItem : Todo = {
            id: Date.now(),
            title: newTodo,
            completed: false,
        }
        setTodos([...todos, newTodoItem])
        setNewTodo('')
    };

    return (
        <div>
            <ul>
                {todos.map((todo)=> (
                    <li
                    key={todo.id}
                    style={{

                    }}
                    >
                        {todo.title}
                    </li>
                ))}
            </ul>
            <input
            type='text'
            value={newTodo}
            onChange= {(event) => setNewTodo(event.target.value)}
            />
            <button
            onClick={addTodo}
            >Add Todo</button>
        </div>
    )
}
export default TodoList;