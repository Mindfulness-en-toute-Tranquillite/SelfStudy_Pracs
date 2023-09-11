import { RootState } from "@/redux/config/configStore";
import { addTodos, deleteTodos, toggleTodos } from "@/redux/modules/todosSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import React, { SyntheticEvent, useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Todo {
    id: number;
    title: string;
    complete: boolean;
}

export default function Todos() {
  const todos = useSelector((state: RootState) => state.todosSlice.todos);
  console.log("todos", todos)
  const [inputText, setInputText] = useState<string>('');
  const dispatch = useDispatch();

  const onSubmitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    if (inputText.trim() === '') 
    return;

    // addTodoAPI(inputText);

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
  };
  const fetchTodos = createAsyncThunk('todos/fetchTodos', async ()=> {
    try {
        const response = await axios.get('/api/todos');
        return response.data.todos;
    }   catch (error) {
        throw error;
    }
  });
  useEffect(() => {
    fetchTodos();
  }, []);

  // const addTodoAPI = async (newTodo: string) => {
  //   try {
  //       await axios.post('/api/todos', { todo: newTodo });
  //       setInputText('');
  //       fetchTodos();
  //   }   catch (error) {
  //       console.error('There is an error while Todo list is being added', error);
  //   }
  // };
  // const deleteTodoAPI = async (id: number) => {
  //   try {
  //     await axios.delete(`/api/todos/${id}`);
  //     fetchTodos(); // 할 일 목록을 다시 불러옵니다.
  //   } catch (error) {
  //     console.error('할 일을 삭제하는 중 오류가 발생했습니다.', error);
  //   }
  // };
  // const toggleTodoAPI = async (id: number) => {
  //   try {
  //     await axios.put(`/api/todos/${id}`);
  //     fetchTodos(); // 할 일 목록을 다시 불러옵니다.
  //   } catch (error) {
  //     console.error('할 일을 토글하는 중 오류가 발생했습니다.', error);
  //   }
  // }

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