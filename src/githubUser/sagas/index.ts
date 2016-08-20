import * as fetch from "isomorphic-fetch";
import {GithubUser} from "../model";
import {put, call, fork} from "redux-saga/effects";
import {receiveUser, receiveUserFailed} from "../actions";
import {take} from "redux-saga/effects";
import * as actions from "../constants/GithubActions";

export function fetchUserInfoApi(user: GithubUser) {
    return fetch(`https://api.github.com/users/${user.name}`)
        .then(response => {
            if (response.status >= 400) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
}
function* watchApiRequest() {
    while (true) {
        const action = yield take(actions.REQUEST_USER);
        try {
            var res = yield call(fetchUserInfoApi, action.user);
            yield put(receiveUser(action.user, res));
        } catch (e) {
            yield put(receiveUserFailed(action.user, e));
        }
    }
}

export default function* root() {
    yield fork(watchApiRequest);
}
