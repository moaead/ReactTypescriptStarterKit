import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import 'babel-polyfill';
import rootReducer from "./todos/reducers/index";
import {addTodo} from "./todos/actions";

const store = createStore(rootReducer);

//Just to debug the state when dispatching events
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);
store.dispatch(addTodo({id: 1, text: "Hey"}));
unsubscribe();

//TODO use in react
ReactDOM.render(
    <div>
        <Provider store={ store }>
            <div>Hello World1</div>
        </Provider>
    </div>,
    document.getElementById('app')
);
