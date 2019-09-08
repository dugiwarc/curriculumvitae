import React from "react";
import StripeCheckout from "react-stripe-checkout";

// Styles
import "./StripeButton.scss";

class StripeButton extends React.Component {
	onToken = token => {
		console.log(token);
	};
	render() {
		const { price } = this.props;
		const priceForStripe = price * 100;
		const publisheableKey = "pk_test_K3VJ6ZLvLKdhLaJTglAd65Qk";
		return (
			<div className='StripeButton'>
				<StripeCheckout
					name='Tusk'
					description='Office Services'
					ComponentClass='div'
					amount={priceForStripe}
					currency='EUR'
					stripeKey={publisheableKey}
					token={this.onToken}
				/>
			</div>
		);
	}
}

export default StripeButton;
