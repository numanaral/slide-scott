import { createSelector, createStructuredSelector } from 'reselect';
import { initialState } from './reducer';
import { KEY } from './constants';

// Direct selector to the userPreferences state
const selectDevSettings = state => state[KEY] || initialState;

// Other specific selectors
const makeSelectAnalytics = () =>
	createSelector(selectDevSettings, ({ theme }) => theme);

// Combined selector
const makeSelectDevSettings = () =>
	createStructuredSelector({
		analytics: makeSelectAnalytics(),
	});

export { selectDevSettings, makeSelectAnalytics };

export default makeSelectDevSettings;
