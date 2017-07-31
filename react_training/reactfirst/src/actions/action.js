import * as types from "../actiontypes/actionsTypes.js"
export function increamentfunction() {

    return {
        type: types.INCREAMENT_COUNTER,
        text: types.INCREAMENT_COUNTER_TEXT
    }
}
export function decreamentfunction() {

    return {
        type: types.DECREAMENT_COUNTER,
        text: types.DECREAMENT_COUNTER_TEXT
    }
}