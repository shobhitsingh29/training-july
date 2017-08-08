import * as actionTypes from "../constants/ActionTypes"


export default function todos(state = [], action) {
    console.log("action", action);
    console.log("action", state);
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                    checked: false
                }
            ];
        case  actionTypes.TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );
        case actionTypes.DEL_TODO:
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, checked: !todo.completed}
                    : todo);

        case actionTypes.DEL_ALL_TODO:
            return  state.filter(todo => (todo.id !== action.id));

        default:
            return state

    }
}