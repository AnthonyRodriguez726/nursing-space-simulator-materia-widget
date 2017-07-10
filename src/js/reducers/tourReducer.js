import { START_TOUR_SECTION, END_TOUR } from "../actions/tour_actions";
import { SELECT_ASSET_TYPE, INSERT_ASSET } from "../actions/grid_actions";
import { INIT_DATA } from "../actions/index";

import steps from "../steps";

export default function(
	state = {
		tourRunning: true,
		steps: steps,
		currentSteps: steps[0],
		runNextSet: false,
		stepCompletion: 0
	},
	action
) {
	switch (action.type) {
		case INIT_DATA:
			return {
				...state,
				runNextSet: true
			};

		case START_TOUR_SECTION:
			return {
				...state,
				currentSteps: state.steps[state.stepCompletion],
				stepCompletion: state.stepCompletion + 1,
				runNextSet: false
			};

		case END_TOUR:
			return {
				...state,
				tourRunning: false
			};

		case SELECT_ASSET_TYPE:
			if (
				state.tourRunning &&
				action.payload.id !== "pov_camera" &&
				state.stepCompletion === 1
			) {
				return {
					...state,
					runNextSet: true
				};
			} else if (
				state.tourRunning &&
				action.payload.id === "pov_camera" &&
				state.stepCompletion === 3
			) {
				return {
					...state,
					runNextSet: true
				};
			} else return state;

		case INSERT_ASSET:
			if (
				state.tourRunning &&
				state.stepCompletion === 2 &&
				action.payload.assetId !== "pov_camera"
			) {
				return {
					...state,
					runNextSet: true
				};
			} else if (
				state.tourRunning &&
				state.stepCompletion === 4 &&
				action.payload.assetId === "pov_camera"
			) {
				return {
					...state,
					runNextSet: true
				};
			} else return state;

		default:
			return state;
	}
}
