import React, { Component } from "react";
import { connect } from "react-redux";

// Styles
import "./Circle.scss";

// Actions
import { selectProject } from "../../redux/navigation/navigation.actions";

class Circle extends Component {
	handleClick = projectID => {
		this.props.selectProject(projectID);
	};
	render() {
		const { selectedProject, project } = this.props;
		const circleStyles = {
			width: project.id === selectedProject ? "25px" : "10px",
			height: project.id === selectedProject ? "25px" : "10px"
		};
		return (
			<div
				className='Circle'
				onClick={() => this.handleClick(project.id)}
				style={circleStyles}
			></div>
		);
	}
}
const mapStateToProps = ({ navigationState: { selectedProject } }) => ({
	selectedProject
});

export default connect(
	mapStateToProps,
	{ selectProject }
)(Circle);
