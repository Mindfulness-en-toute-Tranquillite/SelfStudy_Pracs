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
    const deleteTodo = (id: number) => {
        const deleteTodos = todos.filter((todo) => todo.id !== id)
        setTodos(deleteTodos);
    }
    const toggleTodo = (id: number) => {
        const toggleTodos = todos.map((todo) => 
        todo.id === id ? {...todo, completed : !todo.completed} : todo
        );
        setTodos(toggleTodos);
    }

    return (
        <div>
            <ul>
                {todos.map((todo)=> (
                    <li
                    key={todo.id}
                    style={{
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        cursor:'pointer'
                    }}
                    onClick={()=>{toggleTodo(todo.id)}}
                    >
                        {todo.title}
                        <button
                        key={todo.id}
                        onClick={(e)=>{
                            e.stopPropagation()
                            deleteTodo(todo.id)}}
                        >
                            delete
                        </button>
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