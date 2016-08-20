import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import {compose} from "redux";

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    var middlewares = [sagaMiddleware];
    var store = createStore(rootReducer, compose(
        applyMiddleware(...middlewares),
        (window as any).devToolsExtension && (window as any).devToolsExtension()
    ));
    return Object.assign({}, store, {runSaga: sagaMiddleware.run});
}
