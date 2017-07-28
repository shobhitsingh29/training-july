import React from "react"
import PropTypes from 'prop-types';

class Data extends React.Component {
    render() {

        return (<div>
            <h3>Array : {this.props.propArray}</h3>
            <h3>Bool : {this.props.propBool ? "true.." : "false..."}</h3>
            <h3>Func : {this.props.propFunc(3)}</h3>
            <h3>Number : {this.props.propNumber}</h3>
            <h3>String : {this.props.propString}</h3>
            <h3>Object : {this.props.propObject}</h3>
        </div>)
    }


}
Data.propTypes = {

    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func.isRequired,
    propNumber: PropTypes.number,
    propString: PropTypes.string,
    probObject: PropTypes.object
};

Data.defaultProps = {
    propArray: [1, 3, 4, 5, 6],
    propBool: true,
    propFunc: function (a) {
        console.log(a);
    },
    propNumber: 1,
    propString: "sdfs",
    probObject: {a: "dd"}

};
export default Data;