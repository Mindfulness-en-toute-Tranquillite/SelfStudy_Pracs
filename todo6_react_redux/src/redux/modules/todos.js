const ADD_TODOS = "ADD_TODOS";

export const addTodos = (payload) => {
    return {
        type: ADD_TODOS,
        payload,
    }
};

const initialState = {
    todos: [
        {
            id: 1,
            title: "",
        },
    ],
};

const todos = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TODOS: 
            return {
                ...state,
                todos : [...state.todos, action.payload],
            };
        default:
            return state;
    }
};

export default todos;