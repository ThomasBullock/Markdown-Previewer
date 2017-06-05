import React, { Component } from 'react';
import marked from 'marked';
import {getString} from './String.js';
import './Main.css';


class Main extends Component {
  constructor(props) {
  	super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleClearClick = this.handleClearClick.bind(this);

  	this.state = {
  		markdown: ""
  	}
	}

	componentDidMount() {
		this.setState({
			markdown: getString()
		})
	}

	handleChange(e) {
		console.log(e.target.value)
		this.setState({
			markdown: e.target.value	
		});
	}

	handleClearClick() {
		this.setState({
			markdown: ""
		});
	}	

	render() {
		var markdownHTML = marked(this.state.markdown, { sanitize: true });
		return(
			<main>
				<div className="input">
					<h2 className="input__heading">Type Your Markdown Here</h2>
					<textarea className="input__textfield" rows="25" value={this.state.markdown} onChange={this.handleChange}/>
					<button className="input__clear" onClick={this.handleClearClick}>clear</button>
				</div>
				<div className="output">
					<h2 className="output__heading">Your Markdown Preview</h2>
					<div className="output__field" dangerouslySetInnerHTML={{ __html: markdownHTML }}></div>
				</div>
			</main>
		)
	}
}

export default Main;