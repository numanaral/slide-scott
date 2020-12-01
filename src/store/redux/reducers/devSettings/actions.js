import { SET_DEV_SETTINGS, TOGGLE_ANALYTICS } from './constants';

const setDevSettings = payload => ({
	type: SET_DEV_SETTINGS,
	payload,
});

const toggleAnalytics = () => ({
	type: TOGGLE_ANALYTICS,
});

export { setDevSettings, toggleAnalytics };
