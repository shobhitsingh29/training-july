import React from "react"
import ReactDOM from "react-dom"
import MyButton from "./app.js"

class ParentBtn extends React.Component {
    constructor(props) {
        super(props);
        this.txt = this.props.txt;
        this.state = {txt: "sdsaaaaaa"};

        this.onbtnclick = this.onbtnclick.bind(this);
        this.hndlecng = this.hndlecng.bind(this);
    }

    onbtnclick() {

        this.Mytext = "sdasd";
        console.log(("sdas"));
    }

    hndlecng(evt) {
        this.setState({

            txt: evt.target.value
        })
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    componentWillMount() {
        console.log(("will  mount"));
    }

    componentDidMount() {
        console.log(("did mount"));
    }

    componentWillReceiveProps(newProps) {
        console.log((" Recieve Props"));
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    componentWillUpdate(newProps, newState) {
        console.log(("componenet wil update"));
    }

    componentDidUpdate(newProps, newState) {
        console.log(("componenet did update"));
    }

    render() {
        return <div> child <MyButton onbtnclick={this.onbtnclick} Mytext={this.Mytext}></MyButton > <input type="text"
                                                                                                           onChange={this.hndlecng}
                                                                                                           defaultValue={this.state.txt}/>
            <p>
                {this.state.txt}
            </p></div>;
    }
}


export default ParentBtn;