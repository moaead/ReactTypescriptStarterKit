import {GithubUser} from "../model";
import * as types from "../constants/GithubActions";

const INITIAL_STATE: GithubUser = {
    name: null
};

export default function GithubUserReducer(state = INITIAL_STATE, action): any {
    switch (action.type) {
        case types.REQUEST_USER:
            return Object.assign({}, state, {fetching: true});
        case types.RECEIVE_USER_SUCCESS:
            return Object.assign({}, state, {fetching: false, error: null, info: action.info});
        case types.RECEIVE_USER_FAIL:
            return Object.assign({}, state, {fetching: false, error: action.error, info: null});
        default:
            return state;
    }

}


