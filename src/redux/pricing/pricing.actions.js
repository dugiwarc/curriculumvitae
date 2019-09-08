import pricingTypes from "./pricing.types";

export const togglePricing = () => dispatch => {
	dispatch({
		type: pricingTypes.TOGGLE_PRICING
	});
};
