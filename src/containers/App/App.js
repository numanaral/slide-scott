import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';

import ThemeProvider from 'providers/ThemeProvider';
import NavigationBar from 'components/NavigationBar';
import Routes from 'routes';
import configureStore from 'store';
import Background from './Background';

const initialState = {};
const store = configureStore(initialState);
// Log the store in dev
if (process.env.NODE_ENV !== 'production') window.__redux_store = store;

const App = () => (
	<StoreProvider store={store}>
		<Router>
			<ThemeProvider>
				{themeProps => (
					<Background>
						<NavigationBar {...themeProps} />
						<Routes />
					</Background>
				)}
			</ThemeProvider>
		</Router>
	</StoreProvider>
);

export default App;
