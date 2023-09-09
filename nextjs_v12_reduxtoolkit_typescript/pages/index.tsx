import { RootState } from "@/redux/config/configStore";
import { addTodos, deleteTodos, toggleTodos } from "@/redux/modules/todosSlice";
import React, { SyntheticEvent } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Todo {
    id: number;
    title: string;
    complete: boolean;
}

export default function Home() {
  const todos = useSelector((state: RootState) => state.todosSlice.todos);
  console.log("todos",todos)
  const [inputText, setInputText] = useState<string>('');
  const dispatch = useDispatch();
  
  const onSubmitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    if (inputText.trim() === '') 
    return;

    dispatch(addTodos({
      id: todos.length + 1,
      title: inputText,
      complete: false,
    }))
    setInputText('')
  };

  const onClickDeleteHandler = (id: number) => {
    dispatch(deleteTodos(id));
  };
  
  const onClickToggleHandler = (id: number) => {
    dispatch(toggleTodos(id));
  }

  return(
    <>
      <h1>Todo List</h1>
        <form onSubmit={onSubmitHandler}>
          <input
            type='text' value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <button>Add</button>
        </form>
        {todos.map((todo: Todo) => (
          <div key={todo.id}>
            <li
            key={todo.id}
            style={{
              cursor:'pointer',
              textDecoration: todo.complete ? 'line-through':'none', 
            }}
            onClick={() => onClickToggleHandler(todo.id)}
            >
              {todo.title}
            <button
              key={todo.id}
              onClick={() => onClickDeleteHandler(todo.id)}
            >
              Delete
            </button>
            </li>
          </div>
        ))}
    </>
  )
}