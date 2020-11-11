import produce from 'immer';

import { updateImmerDraft } from 'utils';

import {
	DARK_THEME,
	LIGHT_THEME,
	DEFAULT_VALUES,
	SET_USER_PREFERENCES,
	TOGGLE_THEME,
} from './constants';

export const initialState = DEFAULT_VALUES;

export const userPreferenceReducer = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			case SET_USER_PREFERENCES:
				updateImmerDraft(draft, action.payload);
				break;
			case TOGGLE_THEME:
				draft.theme =
					draft.theme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
				break;
			default:
				// No default
				break;
		}
	});

export default userPreferenceReducer;
