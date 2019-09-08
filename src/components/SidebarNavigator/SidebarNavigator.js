import React, { Component } from "react";
import Circle from "../Circle/Circle";

// Styles
import "./SidebarNavigator.scss";

// Data
import data from "../../data/projects.data";

class SidebarNavigator extends Component {
	render() {
		return (
			<div className='SidebarNavigator'>
				{data.map((item, i) => {
					return <Circle key={i} project={item} />;
				})}
			</div>
		);
	}
}

export default SidebarNavigator;
