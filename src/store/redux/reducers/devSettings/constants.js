import { getOrSetLocalStorageItem } from 'utils/localStorage';

// Defaults
const KEY = 'DevSettings';
const LOCAL_STORAGE_DEV_SETTINGS_KEY = 'dev-settings';
const DEFAULT_VALUES = {
	devSettings: getOrSetLocalStorageItem(LOCAL_STORAGE_DEV_SETTINGS_KEY, {
		analytics: false,
	}),
};

// Types
const SET_DEV_SETTINGS = `${KEY}/SET_DEV_SETTINGS`;
const TOGGLE_ANALYTICS = `${KEY}/TOGGLE_ANALYTICS`;

export {
	KEY,
	LOCAL_STORAGE_DEV_SETTINGS_KEY,
	DEFAULT_VALUES,
	SET_DEV_SETTINGS,
	TOGGLE_ANALYTICS,
};
