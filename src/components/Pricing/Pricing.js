import React from "react";
import { connect } from "react-redux";
import Package from "../Package/Package";

// Style
import "./Pricing.scss";

// Data
import data from "../../data/packages.data";

class Pricing extends React.Component {
	render() {
		const { isActive } = this.props;
		const pricingStyle = {
			transform: isActive && "translateY(0px)"
		};
		return (
			<div className='Pricing' style={pricingStyle}>
				{data.map((item, i) => {
					return <Package item={item} key={i} />;
				})}
			</div>
		);
	}
}

const mapStateToProps = ({ pricingState: { isActive } }) => ({
	isActive
});

export default connect(
	mapStateToProps,
	null
)(Pricing);
