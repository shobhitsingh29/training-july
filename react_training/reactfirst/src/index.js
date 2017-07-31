import React from "react"
import ReactDOM from "react-dom"
import {NavHead} from "./components/navHead.js"
import {RouteHead} from "./components/routehead"
import {Footer} from "./components/footer"
import {Header} from "./components/header"
import {default as App} from  "./container/AppRedux"
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {Provider} from 'react-redux';
import  {combineReducers,createStore,applyMiddleware} from "redux";
import  {default as myreducers} from "./reducers/stateReducer.js"
import {logger,crashReporter} from  "./middleware/middleware"

const reducers=combineReducers({
    state:myreducers
});
const store =createStore(reducers,applyMiddleware(logger));



ReactDOM.render((
    <div>
            <Provider store={store}>
            <App/>
                </Provider>
        </div>), document.getElementById('container'))

/*
/********* old ***********
ReactDOM.render((
    <Router>
        <div>
            <Header></Header>
            <div>
                <NavHead>
                </NavHead>
                <hr/>
                <RouteHead></RouteHead>
            </div>

            <Footer></Footer>
        </div>
    </Router>

), document.getElementById('container'));*/
