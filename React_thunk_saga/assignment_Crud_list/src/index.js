import React from "react";
import ReactDOM from "react-dom";
import {default as App} from "./container/AppRedux"
import {Provider} from "react-redux";
import {combineReducers, createStore, applyMiddleware} from "redux";
import {default as myreducers} from "./reducers/statereducer"
import rootSaga from "./saga/saga";
import createSagaMiddleware from "redux-saga";


const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers(
    {
       state: myreducers

    }
);
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
ReactDOM.render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
    </div>
    , document.getElementById('root'));

