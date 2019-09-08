import React from "react";
import Font from "../Font/Font";

import "./Fonts.scss";

class Fonts extends React.Component {
	render() {
		return (
			<div className='Fonts'>
				{this.props.fonts.map((item, i) => {
					return <Font image={item.image} key={i} title={item.name} />;
				})}
			</div>
		);
	}
}

export default Fonts;
