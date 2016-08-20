import * as constants from "./constants/GithubActions";
import {GithubUser} from "./model";
export const requestUser = (user: GithubUser) => {
    return {
        type: constants.REQUEST_USER,
        user
    };
};

export const receiveUser = (user: GithubUser, info) => {
    return {
        type: constants.RECEIVE_USER_SUCCESS,
        user,
        info
    };
};

export const receiveUserFailed = (user: GithubUser, error) => {
    return {
        type: constants.RECEIVE_USER_FAIL,
        user,
        error
    };
};