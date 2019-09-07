import React, { Component } from "react";

import "./Font.scss";

export default class Font extends Component {
	render() {
		return (
			<div className='Font'>
				<div className='title'>{this.props.title}</div>
				<div className='image'>
					<img src={this.props.image} alt='font' />
				</div>
			</div>
		);
	}
}
