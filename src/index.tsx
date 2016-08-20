import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TodosMainSection from "./todos/components/MainSection"
import GithubUserMainSection from "./githubUser/components/MainSection"
import rootSaga from './githubUser/sagas'
import configureStore from "./store/configureStore";

const store = configureStore();
store.runSaga(rootSaga);


ReactDOM.render(
    <div>
        <Provider store={ store }>
            <div>
                <h2>Todo List</h2>
                <TodosMainSection />
                <hr />
                <h2>Github user grabber (async)</h2>
                <GithubUserMainSection />
            </div>
        </Provider>
    </div>,
    document.getElementById('app')
);
