/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';

import userPreferenceReducer, { userPreferenceKey } from './userPreference';

const rootReducer = combineReducers({
	[userPreferenceKey]: userPreferenceReducer,
});

export default rootReducer;
