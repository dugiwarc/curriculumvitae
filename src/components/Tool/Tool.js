import React, { Component } from "react";

import "./Tool.scss";

export default class Tool extends Component {
	render() {
		return <div className='Tool'>{this.props.tool}</div>;
	}
}
