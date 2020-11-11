import React from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Switch,
	useLocation,
} from 'react-router-dom';

import loadable from 'utils/loadable';
import RouteWrapper from './RouteWrapper';

const TEMP_TEST_ROLES = ['LoggedInUser'];

const AsyncHome = loadable(() => import(`routes/pages/Home`));
const AsyncDashboard = loadable(() => import(`routes/pages/Dashboard`));
const AsyncPreferences = loadable(() => import(`routes/pages/Preferences`));
const AsyncNotFound = loadable(() => import(`./pages/NotFound`));
const AsyncUnauthorized = loadable(() => import(`./pages/Unauthorized`));
const AsyncLogin = loadable(() => import(`./pages/Login`));

const ROUTE_LIST = [
	{ path: '/home', component: <AsyncHome /> },
	{
		path: '/',
		component: <Redirect to="/home" />,
	},
	{
		path: '/dashboard',
		component: <AsyncDashboard />,
		roles: TEMP_TEST_ROLES,
	},
	{
		path: '/preferences',
		component: <AsyncPreferences />,
		roles: TEMP_TEST_ROLES,
	},
	{ path: '/unauthorized', component: <AsyncUnauthorized /> },
	{ path: '/login', component: <AsyncLogin /> },
	{ path: '/not-found', component: <AsyncNotFound /> },
];

export const RedirectToNotFound = () => {
	const { pathname } = useLocation();
	return (
		<RouteWrapper
			exact
			path="*"
			component={
				<Redirect
					to={{
						pathname: '/not-found',
						state: {
							referrer: pathname,
						},
					}}
				/>
			}
		/>
	);
};

const Routes = () => {
	return (
		<Router>
			<Switch>
				{ROUTE_LIST.map(({ component, path, ...rest }) => {
					return (
						<RouteWrapper
							key={path}
							path={path}
							component={component}
							exact
							{...rest}
						/>
					);
				})}
				<RedirectToNotFound />
			</Switch>
		</Router>
	);
};

export default Routes;
