import React from 'react';
import ReactDOM from 'react-dom';
import '../css/styles.css';

class App extends React.Component {
	render(){
		return(
			<div>
				<h1>howdy from React!</h1>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));