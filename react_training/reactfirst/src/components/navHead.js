import React from "react"
import ReactDOM from "react-dom"

import {BrowserRouter as Router, Route, Link } from 'react-router-dom'


class NavHead extends React.Component {
    render() {
        return <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">DRAGON Ball Z</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/topic">Topic</Link></li>
                </ul>
            </div>
        </nav>
    }
}
export {NavHead}