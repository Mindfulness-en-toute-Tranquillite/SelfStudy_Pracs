import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import todosSlice from "../modules/todosSlice";

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
    reducer: {
        todosSlice: todosSlice
    },
    middleware,
    // devTools: process.env.NODE_ENV !== "production", 
    // 개발 환경에서만 Redux DevTools를 활성화하려면 사용할 수 있음
});

// RootState 타입 정의
export type RootState = ReturnType<typeof store.getState>;

export default store;