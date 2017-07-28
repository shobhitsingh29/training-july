import React from "react"
import ReactDOM from "react-dom"
import {Home} from "./subcomponents/home.js"
import {About} from "./subcomponents/about.js"
import {Topic} from "./subcomponents/topic.js"
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'


class RouteHead extends React.Component {
    render() {
        return <div>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
            <Route path="/topic" component={Topic}/>
            </div>
    }
}
export {RouteHead}