import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TodosMainSection from "./todos/components/MainSection"
import GithubUserMainSection from "./githubUser/components/MainSection"
import rootSaga from './githubUser/sagas'
import configureStore from "./store/configureStore";
import {Router, Route, hashHistory} from "react-router";
import {syncHistoryWithStore} from 'react-router-redux'
import App from "./App";

const store = configureStore();
store.runSaga(rootSaga);
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <div>
        <Provider store={ store }>
            <Router history={history}>
                <Route path="/" component={App}>
                    <Route path="/todos" component={TodosMainSection}/>
                    <Route path="/github" component={GithubUserMainSection}/>
                </Route>
            </Router>
        </Provider>
    </div>,
    document.getElementById('app')
);
