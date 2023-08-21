import React, { useState } from 'react';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const TodoList: React.FunctionComponent = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim() === '') return;

        const newTodoItem: Todo = {
            id: Date.now(),
            text: newTodo,
            completed: false,
        }
        setTodos([...todos, newTodoItem]);
        setNewTodo('');
    };
    const toggleTodo = (id: number) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo 
        );
        setTodos(updatedTodos);
    };
    const deleteTodo = (id: number) => {
        const deleteTodos = todos.filter((todo) => todo.id !== id)
        setTodos(deleteTodos);
    };

    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        onClick={() => toggleTodo(todo.id)}
                        style={{
                            textDecoration: todo.completed ? 'line-through': 'none',
                            cursor: 'pointer',
                        }}
                    >
                        {todo.text}
                        <button 
                        key={todo.id}
                        onClick={(event) => {
                            event.stopPropagation();
                            deleteTodo(todo.id)}}
                            >
                                Delete
                                </button>
                    </li>
                ))}
            </ul>
            
            <div>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button onClick={addTodo}>Add Todo</button>
            </div>
        </div>
        );
};



export default TodoList;