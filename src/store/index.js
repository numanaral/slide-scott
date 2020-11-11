/**
 * Create the store and apply middleware
 */

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const configureStore = initialState => {
	// Create the store with two middlewares
	// thunkMiddleware: Handle async calls
	const middleware = [thunkMiddleware];
	const enhancer = applyMiddleware(...middleware);

	const store = createStore(rootReducer, initialState, enhancer);

	return store;
};

export default configureStore;
