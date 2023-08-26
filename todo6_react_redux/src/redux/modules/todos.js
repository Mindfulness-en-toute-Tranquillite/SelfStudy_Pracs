const ADD_TODOS = "ADD_TODOS";
const DELETE_TODOS = "DELETE_TODOS";

export const addTodos = (payload) => {
    return {
        type: ADD_TODOS,
        payload,
    }
};
export const deleteTodos = (id) => {
    return {
        type: DELETE_TODOS,
        id,
    }
}

const initialState = {
    todos: [
    ],
};

const todos = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TODOS: 
            return {
                ...state,
                todos : [...state.todos, action.payload],
            };
        case DELETE_TODOS:
            return {
                ...state,
                todos : state.todos.filter((todo)=> todo.id !== action.id)
            }
        default:
            return state;
    }
};

export default todos;