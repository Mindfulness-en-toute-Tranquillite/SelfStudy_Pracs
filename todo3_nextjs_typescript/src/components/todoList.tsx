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
            <input
                type='text'
                value={newTodo}
                onChange= {(event) => setNewTodo(event.target.value)}
            />
            <button onClick={addTodo}>Add Todo</button>

            <ul>
                {todos.map((todo)=> (
                    <li key={todo.id}>
                        {todo.title}
                        <input
                            key={todo.id}
                            style={{
                                width: '15px', height: '15px',
                                backgroundColor: todo.completed ? 'black' : 'white',
                                cursor:'pointer'
                            }}
                            readOnly
                            onClick={()=>{toggleTodo(todo.id)}}
                        ></input>
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
        </div>
    )
}
export default TodoList;