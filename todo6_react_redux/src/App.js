import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, deleteTodos, toggleTodos } from "./redux/modules/todos";

function App() {
  const [inputTodo, setInputTodo] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos)
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputTodo.trim() === '') return;

    dispatch(addTodos({
      id: todos.length + 1,
      title: inputTodo,
      complete: false,
    }))
    setInputTodo('')
  };
  const onClickDeleteHandler = (id) => {
    dispatch(deleteTodos(id))
  };
  const onClickToggleHandler = (id) => {
    dispatch(toggleTodos(id));
  };
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={onSubmitHandler}>
        <input type='text' value={inputTodo}
        onChange={(e) => {
          setInputTodo(e.target.value);
        }}
        />
        <button>add</button>
      </form>
      {todos.map((todo)=> (
        <div>
        <li key={todo.id}
        style={{
          cursor : 'pointer',
          textDecoration: todo.complete ? 'line-through': 'none',
        }}
        onClick={() => onClickToggleHandler(todo.id)}
        >
          {todo.title}
          <button
          key={todo.id}
          onClick={() => onClickDeleteHandler(todo.id)}
          >delete</button>
        </li>
        
        </div>
      ))}
      
    </div>
  );
}

export default App;