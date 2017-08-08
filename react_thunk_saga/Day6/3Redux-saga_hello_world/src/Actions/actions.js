import  * as types from "../constants/ActionTypes"
export function incrementFunction() {

    return {
        type: types.INCREMENT_COUNTER
    }
}export function decrementFunction() {

    return {
        type: types.DECREMENT_COUNTER
    }
}export function incrementAsyncFunction() {

    return {
        type:types.INCREMENT_COUNTER_ASYNC
    }
}
export function loadDataFunction() {
    return {
        type:types.LOAD_DATA
    }

}