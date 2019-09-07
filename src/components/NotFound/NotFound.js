import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./NotFound.scss";

export default class NotFound extends Component {
	render() {
		return (
			<div className='NotFound'>
				<h1>
					404
					<br />
					<div className='NotFound-subtext'>
						<Link to='/'>Take me home, country roads.</Link>
					</div>
				</h1>
			</div>
		);
	}
}
