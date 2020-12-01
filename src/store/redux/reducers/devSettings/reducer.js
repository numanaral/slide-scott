import produce from 'immer';

import { updateImmerDraft } from 'utils';
import { updateLocalStorageItem } from 'utils/localStorage';

import {
	DEFAULT_VALUES,
	SET_DEV_SETTINGS,
	TOGGLE_ANALYTICS,
	LOCAL_STORAGE_DEV_SETTINGS_KEY,
} from './constants';

export const initialState = DEFAULT_VALUES;

export const userPreferenceReducer = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			case SET_DEV_SETTINGS:
				updateImmerDraft(draft, action.payload);
				break;
			case TOGGLE_ANALYTICS:
				draft.theme = !draft.theme;

				updateLocalStorageItem(
					LOCAL_STORAGE_DEV_SETTINGS_KEY,
					draft.theme
				);
				break;
			default:
				// No default
				break;
		}
	});

export default userPreferenceReducer;
