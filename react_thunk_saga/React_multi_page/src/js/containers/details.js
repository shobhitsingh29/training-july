import React from "react";
import {render} from "react-dom";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {IndexRoute} from "react-router";

class TileList extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<h3>dssa
					{this.props.title}
				</h3>
			</div>
		)
		
	}
}

export default TileList;