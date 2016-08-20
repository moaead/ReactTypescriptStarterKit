import {combineReducers} from "redux";
import TodosReducer from "../todos/reducers/TodosReducer";
import GithubUserReducer from "../githubUser/reducers/GithubUserReducer";
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
    todos: TodosReducer,
    github: GithubUserReducer,
    routing: routerReducer
});

export default rootReducer;