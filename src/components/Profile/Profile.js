import React, { Component } from "react";
import Languages from "../Languages/Languages";

import "./Profile.scss";

export default class Profile extends Component {
	render() {
		return (
			<div className='Profile'>
				<div className='name-and-status'>
					<div className='name'>George Botnaru</div>
					<div className='status'>- Full Stack Developer -</div>
				</div>
				<div className='bar'></div>
				<Languages />
			</div>
		);
	}
}
