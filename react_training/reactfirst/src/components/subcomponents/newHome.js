import React from "react"
import ReactDOM from "react-dom"
class NewHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    onInc() {
/*
        this.props.count+=1;*/

    }

    onDec() {/*
        this.props.count-= 1;*/
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.count}/>
                <input type="button" value="+" onClick={this.onInc.bind(this)}/>
                <input type="button" value="-" onClick={this.onDec.bind(this)}/>
            </div>
        );
    }
}
NewHome.defaultProps = {
    count: 0


};
export {NewHome}