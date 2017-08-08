import React from "react"
import ReactDOM from "react-dom"
import ParentBtn from "./parent.js"
import {Ele} from "./domelementrefs.js"
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

import {Header,About,Topic} from "./routs.js"


ReactDOM.render((
    <Ele></Ele>
), document.getElementById('container'));



/*

ReactDOM.render((
    <Router>
        <div>
            <ul>
                    <li><Link to="/home">Header</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/topic">Topic</Link></li>
            </ul>
            <hr/>
                <Route path="/home" components={Header}/>
                <Route path="/about" components={About}/>
                <Route path="/topic" components={Topic}/>
        </div>
    </Router>

), document.getElementById('container'));*/
