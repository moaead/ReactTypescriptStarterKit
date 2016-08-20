import {combineReducers} from "redux";
import TodosReducer from "../todos/reducers/TodosReducer";
import GithubUserReducer from "../githubUser/reducers/GithubUserReducer";

const rootReducer = combineReducers({
    todos: TodosReducer,
    github: GithubUserReducer
});

export default rootReducer;