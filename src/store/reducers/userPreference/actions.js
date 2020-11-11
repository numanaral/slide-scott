import { SET_USER_PREFERENCES, TOGGLE_THEME } from './constants';

const setUserPreferences = payload => ({
	type: SET_USER_PREFERENCES,
	payload,
});

const toggleTheme = () => toggleTheme(TOGGLE_THEME);

export { setUserPreferences, toggleTheme };
