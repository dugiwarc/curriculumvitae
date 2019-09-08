import React from "react";
import { connect } from "react-redux";

// Styles
import "./Header.scss";

// Actions
import { togglePricing } from "../../redux/pricing/pricing.actions";

class Header extends React.Component {
	render() {
		const { togglePricing, isActive } = this.props;
		return (
			<div className='Header'>
				<div className='left'>
					<h2>Curriculum Vitae</h2>
				</div>
				<div className='mid'>
					Available <div className='available'></div>
				</div>
				<div className='right'>
					<div
						className='pricing'
						onClick={() => {
							togglePricing();
						}}
					>
						{isActive ? `Home` : `Pricing`}
					</div>
					<div className='resume'>
						<a href='../../downloads/englishResume.pdf' download>
							Get resume
						</a>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ pricingState: { isActive } }) => ({
	isActive
});

export default connect(
	mapStateToProps,
	{ togglePricing }
)(Header);
