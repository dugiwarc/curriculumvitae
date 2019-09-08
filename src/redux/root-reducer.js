import { combineReducers } from "redux";

import navigationReducer from "./navigation/navigation.reducer";
import pricingReducer from "./pricing/pricing.reducer";

export default combineReducers({
	navigationState: navigationReducer,
	pricingState: pricingReducer
});
