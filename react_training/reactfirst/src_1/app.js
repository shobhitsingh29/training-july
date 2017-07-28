import React from "react"
import ReactDOM from "react-dom"

class MyButton extends React.Component{

    render(){
        return <input type="button" onClick={this.props.onbtnclick} value={this.props.txt}/>
    }
}


export default MyButton;