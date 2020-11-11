// Defaults
const KEY = 'UserPreference';
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';
const DEFAULT_VALUES = {
	theme: DARK_THEME,
};

// Types
const SET_USER_PREFERENCES = `${KEY}/SET_USER_PREFERENCES`;
const TOGGLE_THEME = `${KEY}/TOGGLE_THEME`;

export {
	KEY,
	DARK_THEME,
	LIGHT_THEME,
	DEFAULT_VALUES,
	SET_USER_PREFERENCES,
	TOGGLE_THEME,
};
