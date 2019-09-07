import React from "react";
import Color from "../Color/Color";

// Styles
import "./Colors.scss";

class Colors extends React.Component {
	render() {
		return (
			<div className='Colors'>
				{this.props.colors.map((item, i) => {
					return <Color code={item} key={i} />;
				})}
			</div>
		);
	}
}

export default Colors;
