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
    },
})

export const { addTodos } =  todosSlice.actions;
export default todosSlice.reducer;