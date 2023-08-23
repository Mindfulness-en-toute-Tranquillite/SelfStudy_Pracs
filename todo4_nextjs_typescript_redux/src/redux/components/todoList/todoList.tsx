import store from '@/redux/config';
import React from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { addTodo, toggleTodo } from '../../modules/todoSlice';

function TodoApp() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: 'New Todo',
      completed: false,
    };
    dispatch(addTodo(newTodo));
  };

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  return (
    <Provider store={store}>
    <div>
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
    </Provider>
  );
}

export default TodoApp;