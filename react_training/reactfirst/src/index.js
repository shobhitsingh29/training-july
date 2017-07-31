import React from "react"
import ReactDOM from "react-dom"
import {NavHead} from "./components/navHead.js"
import {RouteHead} from "./components/routehead"
import {Footer} from "./components/footer"
import {Header} from "./components/header"
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

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

), document.getElementById('container'));