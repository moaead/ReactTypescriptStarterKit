import {expect} from 'chai';
import * as actions from "../actions";
import * as types from "../constants/ActionTypes"
import {Todo} from "../model";

describe("todos actions", () => {
    it("Should create an action to add a todo", () => {
        const todo: Todo = {id: 0, text: "Test"};
        const expectedAction = {
            todo,
            type: types.ADD_TODO
        };
        expect(actions.addTodo(todo)).to.eql(expectedAction);
    });

    it("Should create an action to edit a todo", () => {
        const todo: Todo = {id: 0, text: "Test"};
        const newText = "Test1";

        const expectedAction = {
            todo: {id: todo.id, text: newText},
            type: types.EDIT_TODO
        };
        expect(actions.editTodo(todo, newText)).to.eql(expectedAction);
    });

    it("Should create an action to delete a todo", () => {
        const todo: Todo = {id: 0, text: "Test"};
        const expectedAction = {
            todo,
            type: types.DELETE_TODO
        };
        expect(actions.deleteTodo(todo)).to.eql(expectedAction);
    });

});
