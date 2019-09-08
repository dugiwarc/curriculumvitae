import navigationTypes from "./navigation.types";

export const selectProject = project => dispatch => {
	dispatch({
		type: navigationTypes.SELECT_PROJECT,
		payload: project
	});
};
