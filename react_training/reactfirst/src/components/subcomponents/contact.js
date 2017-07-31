import React from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';
class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        alert("your form has been submitted");
        this.setState({data: ''});
        ReactDOM.findDOMNode(this.refs.name).focus();
    }

    render() {
        return (<div>
                <form>
                    <label >Name : </label>
                    <input type="text" id="name" placeholder="name" ref="name"/>
                    <label  >mobile number : </label> <input type="number" id="phone"
                                                             placeholder="mobile number" />
                    <label>Adress : </label> <input type="text" id="adress"
                                                    placeholder="adress" />

                    <input type="submit" onClick={this.onSubmit} value="submit"/>
                </form>


            </div>
        );
    }
}


Contact.propTypes = {
    propNumber: PropTypes.number.isRequired,
    propString: PropTypes.string.isRequired
};

Contact.defaultProps = {
    propNumber: 999999999,
    propString: "abcd"


};
export {Contact}