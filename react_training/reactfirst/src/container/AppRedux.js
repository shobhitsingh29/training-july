import React from "react"
import ReactDOM from "react-dom"
import App from '../app'
import {connect} from 'react-redux';
import * as stateActions from "../actions/action"


class AppRedux extends React.Component {
    render() {
        /*console.log("oooooooo",this.props);*/
        return (
            <App increase={this.props.increase} decrease={this.props.decrease} counter={this.props.counter}/>
        )
    }
}

const mapStateToProps = state=> {
    var data = {
        counter: state.state.counter
    };
    return data;
};
const mapDispatchToProps = dispatch => ({
    increase: ()=> {  dispatch(stateActions.increamentfunction())},
    decrease: ()=> dispatch(stateActions.decreamentfunction())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRedux)