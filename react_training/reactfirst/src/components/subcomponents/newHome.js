/**
 * Created by shob on 28-07-2017.
 */
import React from "react"
import ReactDOM from "react-dom"
class NewHome extends React.Component {
    render() {
        return (
            <div>
        <script>function doIt(match) {
            // code in here
            console.log(this.props.match) // you could do stuff depending on the id
        }</script><h2 onload="doIt(match)">home</h2><h1>NewHome page</h1>
                </div>
    );
    }
}
export {NewHome}