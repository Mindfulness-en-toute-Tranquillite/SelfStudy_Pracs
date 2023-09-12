import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Todo {
    id: number;
    title: string;
    complete: boolean;
}
interface TodosState {
    todos: Todo[];
}
// 비동기 액션 생성자 정의
export const __getTodos = createAsyncThunk('todos/getTodos', async () => {
    try {
        const response = await axios.get('/api/todos');
        console.log("response",response)
        return response.data.todos;
    } catch (error) {
        throw error;
    }
});
// __addTodos 액션 생성
export const __addTodos = createAsyncThunk('todos/addTodos', async (newTodo: string) => {
    try {
        const response = await axios.post('/api/todos', { todo: newTodo });
        return response.data; // 새로 추가된 Todo를 반환
    } catch (error) {
        throw error;
    }
});

// __deleteTodos 액션 생성
export const __deleteTodos = createAsyncThunk('todos/deleteTodos', async (id: number) => {
    try {
        await axios.delete(`/api/todos/${id}`);
        return id; // 삭제된 Todo의 ID를 반환
    } catch (error) {
        throw error;
    }
});

// __toggleTodos 액션 생성
export const __toggleTodos = createAsyncThunk('todos/toggleTodos', async (id: number) => {
    try {
        await axios.put(`/api/todos/${id}`);
        return id; // 토글된 Todo의 ID를 반환
    } catch (error) {
        throw error;
    }
});


const todosSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
    } as TodosState,
    reducers: {
    },
        // addTodos: (state, action: PayloadAction<Todo>) => {
        //     state.todos.push(action.payload);
        // },
        // deleteTodos: (state, action: PayloadAction<number>) => {
        //     state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        // },
        // toggleTodos: (state, action: PayloadAction<number>) => {
        //     const todo = state.todos.find((todo) => todo.id === action.payload)
        //     if (todo)
        //     todo.complete = !todo.complete
        // }
        extraReducers: (builder) => {
            // createAsyncThunk로 생성한 액션을 처리
            builder.addCase(__getTodos.fulfilled, (state, action) => {
                state.todos = action.payload;
            })
            .addCase(__addTodos.fulfilled, (state, action) => {
                // 추가한 항목을 state에 추가
                state.todos.push(action.payload);
            })
            .addCase(__deleteTodos.fulfilled, (state, action) => {
                // 삭제한 항목을 state에서 제거
                state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            })
            .addCase(__toggleTodos.fulfilled, (state, action) => {
                // 토글한 항목의 complete 상태를 변경
                const todo = state.todos.find((t) => t.id === action.payload);
                if (todo) {
                    todo.complete = !todo.complete;
                }
            });
    },
})

// export const { addTodos, deleteTodos, toggleTodos } =  todosSlice.actions;
export default todosSlice.reducer;