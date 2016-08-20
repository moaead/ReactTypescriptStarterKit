import * as constants from "./constants/ActionTypes"
import {Todo} from "./model";

export const addTodo = (todo: Todo) => {
    return {
        todo,
        type: constants.ADD_TODO
    };
};

export const editTodo = (todo: Todo, newText) => {
    return {
        todo: Object.assign({}, todo, {text: newText}),
        type: constants.EDIT_TODO,
    };
};

export const deleteTodo = (todo: Todo) => {
    return {
        todo,
        type: constants.DELETE_TODO
    };
};
