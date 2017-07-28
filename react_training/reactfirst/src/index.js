import React from "react"
import ReactDOM from "react-dom"
import ParentBtn from "./parent.js"


import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

import {Header,About,Topic} from "./routs.js"


ReactDOM.render((
    <Router>
        <div>
            <ul>
                <li><Link to="/home">Header</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topic">Topic</Link></li>
            </ul>
            <hr/>
                <Route path="/home" component={Header}/>
                <Route path="/about" component={About}/>
                <Route path="/topic" component={Topic}/>
        </div>
    </Router>

), document.getElementById('container'));