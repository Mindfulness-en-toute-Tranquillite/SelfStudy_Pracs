
const PLUS_ONE = "PLUS_ONE";
const MINUS_ONE = "MINUS_ONE";

export const plusOne = () => {
    return {
        type: PLUS_ONE,
    };
};
export const minusOne = () => {
    return {
        type: MINUS_ONE,
    };
};

const initialState = {
    number: 0,
};

const counter = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case "PLUS_ONE" :
            return {
                number: state.number + 1,
            };
        case "MINUS_ONE" :
            return {
                number: state.number - 1,
            }
        default: 
            return state;
    }
};

export default counter;