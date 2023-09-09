import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
    id: number;
    title: string;
    complete: boolean;
}
interface TodosState {
    todos: Todo[];
}

const todosSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
    } as TodosState,
    reducers: {
        addTodos: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        },
        deleteTodos: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        toggleTodos: (state, action: PayloadAction<number>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload)
            if (todo)
            todo.complete = !todo.complete
        }
    },
})

export const { addTodos, deleteTodos, toggleTodos } =  todosSlice.actions;
export default todosSlice.reducer;