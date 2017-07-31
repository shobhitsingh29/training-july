import React from "react"
import ReactDOM from "react-dom"
import {Home} from "./subcomponents/home.js"
import {About} from "./subcomponents/about.js"
import {Contact} from "./subcomponents/contact"
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'


class RouteHead extends React.Component {
    render() {
        return <div>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
        </div>
    }
}
export {RouteHead}