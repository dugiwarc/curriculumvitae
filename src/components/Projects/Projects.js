import React from "react";
import Project from "../Project/Project";

// Sty;es
import "./Projects.scss";

// Data
import data from "../../data/projects.data";

const Projects = () => {
	return (
		<div className='Projects'>
			{data
				.filter(item => item.isReady)
				.map((item, i) => {
					return (
						<Project
							key={i}
							title={item.title}
							imageDesktop={item.imageDesktop}
							imageMobile={item.imageMobile}
							imageDesktopCoords={item.imageDesktopCoords}
							imageMobileCoords={item.imageMobileCoords}
							colors={item.colors}
							fonts={item.fonts}
							tools={item.tools}
						/>
					);
				})}
		</div>
	);
};

export default Projects;
