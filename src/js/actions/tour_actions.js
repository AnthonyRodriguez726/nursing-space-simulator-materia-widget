export const END_TOUR = "END_TOUR";
export function endTour() {
	return {
		type: END_TOUR
	};
}

export const START_TOUR_SECTION = "START_TOUR_SECTION";
export function startTourSection() {
	return {
		type: START_TOUR_SECTION
	};
}

export const RESTART_TOUR = "RESTART_TOUR";
export function restartTour() {
	return {
		type: RESTART_TOUR
	};
}
