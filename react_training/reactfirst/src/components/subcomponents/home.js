import React from "react"
import ReactDOM from "react-dom"
import {NewHome} from "./newHome.js"
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'


const Home = ({ match }) => (
    <div>
        <script>
            function doIt(match) {
            // code in here
            console.log(match) // you could do stuff depending on the id
        }
        </script>
        <h2  onload="doIt(match)">home</h2>
        <Link to={`${match.url}/newHome`}>
          goto new home
        </Link>
        <Route path={`${match.url}/:newHome`} component={NewHome}/>
    </div>
);
export {Home}
