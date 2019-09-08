import pricingTypes from "./pricing.types";

const initialState = {
	isActive: false
};

const pricingReducer = (state = initialState, action) => {
	switch (action.type) {
		case pricingTypes.TOGGLE_PRICING:
			return { ...state, isActive: !state.isActive };
		default:
			return state;
	}
};

export default pricingReducer;
