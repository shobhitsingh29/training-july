import * as types from "../constants/ActionTypes.js"


let nextTodoId = 0;
export const addTodo = (text) => {
    return {
        type: types.ADD_TODO,
        id: nextTodoId++,
        text
    }
};
export const setVisibilityFilter = (filter) => {
    return {
        type: types.SET_VISIBILITY_FILTER,
        filter
    }
};
export const toggleTodo = (id) => {
    return {
        type: types.TOGGLE_TODO,
        id
    };
};

export const delTodo = (id) => {
    return {
        type: types.DEL_ALL_TODO,
        id
    }
};
export const chkTodo = (id) => {
    return {
        type: types.DEL_TODO,
        id
    }
}

;export const setDropdownFilter = (filter) => {
    return {
        type: types.SET_DROPDOWN_FILTER,
        filter
    }
};
