import navigationTypes from "./navigation.types";

const initialState = {
	selectedProject: 1
};

const navigationReducer = (state = initialState, action) => {
	switch (action.type) {
		case navigationTypes.SELECT_PROJECT:
			return {
				...state,
				selectedProject: action.payload
			};
		default:
			return state;
	}
};

export default navigationReducer;
