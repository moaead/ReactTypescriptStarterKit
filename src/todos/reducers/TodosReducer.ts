import {Todo} from "../model";
import * as types from "../constants/ActionTypes";

const INITIAL_STATE: Todo[] = [{
    id: 0,
    text: "Text1"
}];


export default function TodosReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.ADD_TODO:
            return [...state, action.todo];
        case types.EDIT_TODO:
            return state.map(todo => todo.id === action.todo.id ? Object.assign({}, todo, {text: action.newText}) : todo);
        case types.DELETE_TODO:
            return state.filter(todo => todo.id !== action.todo.id);
        default:
            return state;
    }
}