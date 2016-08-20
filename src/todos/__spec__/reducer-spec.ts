import {expect} from 'chai';
import * as types from "../constants/ActionTypes"
import {Todo} from "../model";
import reducer from "../reducers/todosReducer";

describe("todos reducer", () => {
    it("should handle ADD_TODO", () => {
        const todo: Todo = {id: 0, text: "Test"};

        expect(reducer([], {
            todo,
            type: types.ADD_TODO
        })).to.eql([todo]);
    });

    it("should handle EDIT_TODO", () => {
        const todo: Todo = {id: 0, text: "Test"};
        let state: Todo[] = [todo];

        expect(reducer(state, {
            todo,
            type: types.EDIT_TODO,
            newText: "Test2"
        })).to.eql([{
            id: todo.id,
            text: "Test2"
        }]);
    });

    it("should handle DELETE_TODO", () => {
        const todo: Todo = {id: 0, text: "Test"};
        let state: Todo[] = [todo];

        expect(reducer(state, {
            todo,
            type: types.DELETE_TODO,
            newText: "Test2"
        })).to.eql([]);
    });

});
