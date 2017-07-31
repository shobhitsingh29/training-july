import React from "react"
import ReactDOM from "react-dom"
class NewHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    onInc() {
/*
        this.props.counter+=1;*/

    }

    onDec() {/*
        this.props.counter-= 1;*/
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.counter}/>
                <input type="button" value="+" onClick={this.onInc.bind(this)}/>
                <input type="button" value="-" onClick={this.onDec.bind(this)}/>
            </div>
        );
    }
}
NewHome.defaultProps = {
    counter: 0


};
export {NewHome}