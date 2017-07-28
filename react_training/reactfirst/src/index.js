import React from "react"
import ReactDOM from "react-dom"
import {Home} from "./components/subcomponents/home.js"
import {About} from "./components/subcomponents/about.js"
import {Topic} from "./components/subcomponents/topic.js"
import {NavHead} from "./components/navHead.js"
import {RouteHead} from "./components/routehead"
import {Footer} from "./components/footer"
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

ReactDOM.render((
    <Router>
        <div>
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