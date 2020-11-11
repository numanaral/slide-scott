import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';

import NavigationBar from 'components/NavigationBar';
import Routes from 'routes';
import configureStore from 'store';
import Container from './Container';
import './App.css';

const initialState = {};
const store = configureStore(initialState);
// Log the store in dev
if (process.env.NODE_ENV !== 'production') window.__redux_store = store;

const App = () => (
	<StoreProvider store={store}>
		<Router>
			<NavigationBar />
			<Container>
				<Routes />
			</Container>
		</Router>
	</StoreProvider>
);

export default App;
