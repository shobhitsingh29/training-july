import * as actionTypes from "../constants/ActionTypes"

const initialState = {
    counter: 0,
    loader: false
};
export default function stateReducer(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case actionTypes.INCREMENT_COUNTER:
            console.log(state);
            return Object.assign({}, ...state, {counter: state.counter + 1});
        case actionTypes.DECREMENT_COUNTER:
            return Object.assign({}, ...state, {counter: state.counter - 1});
        case actionTypes.LOAD_DATA_FAILURE:
            console.log("failed");
            return Object.assign({}, state);
        case actionTypes.LOAD_DATA_SUCCESS:
            console.log("success");
            return Object.assign({}, state);
        default:
            return Object.assign({}, state);

    }

}