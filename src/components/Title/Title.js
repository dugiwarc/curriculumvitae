import React from "react";

// Styles
import "./Title.scss";

class Title extends React.Component {
	render() {
		return (
			<div className='Title'>
				<p>
					<span className='project-title'>Project name:{"\u00A0"}</span>
					<span className='project-name'>{this.props.title}</span>
				</p>
			</div>
		);
	}
}

export default Title;
