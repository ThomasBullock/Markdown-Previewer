import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
	constructor(props) {
		super(props)

		this.handleChange = this.handleChange.bind(this);

		this.state = {
			markdown: ""
		}
	}

	handleChange(e) {
		this.setState({
			markdown : e.target.value
		})
	}

	render() {
		return(
			<div className="input">
				<h2 className="input__heading">Type Your Markdown Here</h2>
				<input className="input__textfield" type="textarea" onChange={this.handleChange}/>
			</div>
		)
	}
}

export default Input;