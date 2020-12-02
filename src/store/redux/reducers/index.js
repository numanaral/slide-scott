/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import userPreferenceReducer, { userPreferenceKey } from './userPreference';
import devSettingsReducer, { devSettingsKey } from './devSettings';
import snackbarReducer, { snackbarKey } from './snackbar';
import dialogReducer, { dialogKey } from './dialog';

const rootReducer = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	[userPreferenceKey]: userPreferenceReducer,
	[devSettingsKey]: devSettingsReducer,
	[snackbarKey]: snackbarReducer,
	[dialogKey]: dialogReducer,
});

export default rootReducer;
