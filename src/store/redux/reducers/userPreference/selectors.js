import { createSelector, createStructuredSelector } from 'reselect';
import { initialState } from './reducer';
import { KEY } from './constants';

// Direct selector to the userPreferences state
const selectUserPreferences = state => state[KEY] || initialState;

// Other specific selectors
const makeSelectTheme = () =>
	createSelector(selectUserPreferences, ({ theme }) => theme);

// Combined selector
const makeSelectUserPreferences = () =>
	createStructuredSelector({
		theme: makeSelectTheme(),
	});

export { selectUserPreferences, makeSelectTheme };

export default makeSelectUserPreferences;
