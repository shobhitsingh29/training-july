import React from "react"
import ReactDOM from "react-dom"

class Ele extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: "sdsaaaaaa"};
        this.clearInput=this.clearInput.bind(this);
    }
    updatestate(e) {

        this.setState({data: e.target.value});
    }

    clearInput() {
        this.setState({data: ''});
        ReactDOM.findDOMNode(this.refs.name).focus();
    }

    render() {
        return <div><input value={this.state.data} onChange={this.updatestate} ref="name"/>
            <button onClick={this.clearInput}>Clear</button>
            <h1>{this.state.data}</h1>
        </div>;
    }
}
export {Ele}