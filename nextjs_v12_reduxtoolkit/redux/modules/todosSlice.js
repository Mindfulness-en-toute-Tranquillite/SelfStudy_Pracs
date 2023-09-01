import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
    },
    reducers: {
        addTodos: (state, action) => {
            state.todos.push(action.payload);
        },
        deleteTodos: (state, action) => {
            state.todos.filter((todo) => todo.id !== action.payload);
        },
        toggleTodos: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload)
            if (todo)
            todo.complete = !todo.complete
        }
    },
})

export const { addTodos } =  todosSlice.actions;
export default todosSlice.reducer;