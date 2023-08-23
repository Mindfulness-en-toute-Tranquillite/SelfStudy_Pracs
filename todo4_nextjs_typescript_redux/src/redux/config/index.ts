import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../modules/todoSlice';

const rootReducer = {
  todos: todoReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;