import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "./redux/modules/todos";

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
      title: inputTodo
    }))
    setInputTodo('')
  }
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
        <li key={todo.id}>
          {todo.title}
        </li>
      ))}
    </div>
  );
}

export default App;
