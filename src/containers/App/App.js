import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import Routes from 'routes';
import configureStore from 'store';

const initialState = {};
const store = configureStore(initialState);
// Log the store in dev
if (process.env.NODE_ENV !== 'production') window.__redux_store = store;

const App = () => (
	<StoreProvider store={store}>
		<Routes />
	</StoreProvider>
);

export default App;
