import React, { Component } from 'react';
import marked from 'marked';
import './Output.css';


class Output extends Component {
	render() {
		var markdownHTML = marked(this.props.plainText, { sanitize: true });
		return(
			<div className="input">
				<h2 className="input__heading">Type Your Markdown Here</h2>
				<div dangerouslySetInnerHTML={{ __html: markdownHTML }}></div>
			</div>
		)
	}
}

export default Output;