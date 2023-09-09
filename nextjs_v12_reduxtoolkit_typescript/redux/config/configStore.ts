import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../modules/todosSlice";

// interface RootState {
//     todosSlice: { todos: Todo[] };
// }

const store = configureStore({
    reducer: {
        todosSlice: todosSlice
    },
});
export default store;