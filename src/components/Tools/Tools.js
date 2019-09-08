import React, { Component } from "react";
import Tool from "../Tool/Tool";

import "./Tools.scss";

export default class Tools extends Component {
	render() {
		return (
			<div className='Tools'>
				{this.props.tools.map((item, i) => {
					return <Tool tool={item} key={i} />;
				})}
			</div>
		);
	}
}
