import React from "react"
import ReactDOM from "react-dom"
import {NavHead} from "./components/navHead.js"
import {RouteHead} from "./components/routehead"
import {Footer} from "./components/footer"
import {Header} from "./components/header"
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {Provider} from 'react-redux';
import  {combineReducers,createStore} from "redux";
import  {default as myreducers} from "./reducers/stateReducer.js"

const reducers=combineReducers({
    state:myreducers
});
const store =createStore(reducers);



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
