import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

// Main component (will eventually use all the others)
class FastFlixApplication extends React.Component {
	render() {
		return (
			<div className="fast-flix">
			<div>Good morning</div>
			</div>
		);
	}
}

// Finds the root of the app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render the app in the root DOM element
ReactDOM.render(React.createElement(FastFlixApplication), container);