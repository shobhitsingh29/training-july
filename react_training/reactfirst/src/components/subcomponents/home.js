import React from "react"
import ReactDOM from "react-dom"
import {NewHome} from "./newHome.js"
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = ({ match }) => (
    <div>
        <h2>Counter example</h2>
        <Link to={`${match.url}/counter`}>
            goto counter
        </Link>
        <Route path={`${match.url}/:counter`} component={NewHome}/>
    </div>
);
export {Home}
