import { INCREMENT, DECREMENT } from "../Actions/actionTypes"

const intialState = {
    counter: 0
}
const counterReducer = (state = intialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREMENT: {
            return {
                ...state,
                counter: state.counter - 1
            }
        }

        default:
            return state;
    }
}

export default counterReducer;