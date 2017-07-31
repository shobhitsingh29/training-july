import React from "react"
import ReactDOM from "react-dom"
import * as stateActions from "./actions/action"
import {connect} from 'react-redux';
import {default as Apps} from  "./container/AppRedux"
import PropTypes from 'prop-types';

class App extends React.Component {
   /* static propTypes = {
        counter: PropTypes.number,
        increase: PropTypes.func.isRequired,
        decrease: PropTypes.func.isRequired
    };*/

/*
    constructor(props) {
        super(props);

        this.onInc = this.onInc.bind(this);
        this.onDec = this.onDec.bind(this);
    }

    onInc() {
        this.props.dispatch(stateActions.increamentfunction());
    }

    onDec() {
        this.props.dispatch(stateActions.decreamentfunction());
    }

    /!* onInc() {
     /!*
     this.props.counter+=1;*!/

     }

     onDec() {/!*
     this.props.counter-= 1;*!/
     }*!/
*/

    render() {
        console.log('------',this.props);
        return (
              <div>
             <input id="state_container" type="text" value={this.props.counter}/>
             <input type="button" value="+" onClick={this.props.increase}/>
             <input type="button" value="-" onClick={this.props.decrease}/>
             </div>
        )
    }
}
App.defaultProps = {
    counter: 0


};
export default App