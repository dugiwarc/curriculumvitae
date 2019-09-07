import React from "react";
import Screen from "../Screen/Screen";
import Title from "../Title/Title";
import Colors from "../Colors/Colors";
import Fonts from "../Fonts/Fonts";
import Tools from "../Tools/Tools";

// Styles
import "./Project.scss";

class Project extends React.Component {
	render() {
		return (
			<div className='Project'>
				<Title title={this.props.title} />
				<Screen
					imageMobile={this.props.imageMobile}
					imageDesktop={this.props.imageDesktop}
					imageDesktopCoords={this.props.imageDesktopCoords}
					imageMobileCoords={this.props.imageMobileCoords}
				/>
				<Colors colors={this.props.colors} />
				<Fonts fonts={this.props.fonts} />
				<Tools />
			</div>
		);
	}
}

export default Project;
