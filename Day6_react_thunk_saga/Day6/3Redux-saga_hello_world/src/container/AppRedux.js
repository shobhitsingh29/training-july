import React from "react";
import * as stateActions from "../Actions/actions";
import {default as Apps} from "../component/AppRedux";
import {connect} from 'react-redux';


const mapStateToProps = state => {
    return {
        counter: state.state.counter,
        loader: state.state.loader
    }
};
const mapDispatchToProps = dispatch => ({
    increase: () => dispatch(stateActions.incrementFunction()),
    decrease: () => dispatch(stateActions.decrementFunction()),
    increaseAsync: () => dispatch(stateActions.incrementAsyncFunction()),
    dataLoader: () => dispatch(stateActions.loadDataFunction())

});

class App extends React.Component {
    render() {
        return (

            <Apps increaseAsync={this.props.increaseAsync}
                  increase={this.props.increase}
                  decrease={this.props.decrease}
                  counter={this.props.counter}
                  loader={this.props.loader}
                  dataLoader={this.props.dataLoader}/>

        )

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
