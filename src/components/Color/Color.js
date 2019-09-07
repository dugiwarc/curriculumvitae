import React, { Component } from "react";

import "./Color.scss";

export default class Color extends Component {
	render() {
		const boxStyle = {
			background: `${this.props.code}`
		};
		return (
			<div className='Color'>
				<div className='title'>{this.props.code}</div>
				<div className='color-box' style={boxStyle} />
			</div>
		);
	}
}
