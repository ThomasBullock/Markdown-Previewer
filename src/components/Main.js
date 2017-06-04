import React, { Component } from 'react';
import './Main.css';

import Input from './Input';
import Output from './Output';

class Main extends Component {
	render() {
		return(
			<main>
				<Input />
				<Output plainText="My Heading"/>
			</main>
		)
	}
}

export default Main;