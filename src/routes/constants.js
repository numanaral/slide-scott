import React from 'react';
import { Redirect } from 'react-router-dom';

import loadable from 'utils/loadable';

const ROLES = {
	DEV: ['Developer'],
};

const TEMP_TEST_ROLES = ['LoggedInUser'];

// This is kinda required for gh-pages and SPA to work well together
const BASE_PATH = '/slide-scott';

const mapBasePathForRoutes = route => ({
	...route,
	path: BASE_PATH + route.path,
});

const mapBasePathForLinks = link => ({
	...link,
	...(link.to && { to: BASE_PATH + link.to }),
});

/* eslint-disable prettier/prettier */
const LazyHome = loadable(() => import(`routes/pages/Home`));
const LazyDashboard = loadable(() => import(`routes/pages/Dashboard`));
const LazyPreferences = loadable(() => import(`routes/pages/Preferences`));
const LazyDevSettings = loadable(() => import(`routes/pages/DevSettings`));

const LazyNotFound = loadable(() => import(`./pages/NotFound`));
const LazyUnauthorized = loadable(() => import(`./pages/Unauthorized`));
const LazyLogin = loadable(() => import(`./pages/Login`));
/* eslint-enable prettier/prettier */

const ROUTE_LIST = [
	{
		title: 'Home | Slide Scott',
		description: `Learn new characters along with their translations and pinyin. Check details for more examples and practice writing using your mouse/fingers!`,
		path: '/',
		component: <LazyHome />,
	},
	{
		path: '',
		component: <Redirect to="/slide-scott/" />,
	},
	{
		title: 'Dashboard',
		description: `Dashboard to manage your slides, templates, and other settings. You can also view your analytics`,
		path: '/dashboard',
		component: <LazyDashboard />,
		roles: TEMP_TEST_ROLES,
	},
	{
		title: 'Preferences',
		description: `Adjust your app preferences.`,
		path: '/preferences',
		component: <LazyPreferences />,
		roles: TEMP_TEST_ROLES,
	},
	{
		title: 'Dev Settings',
		description: `Developer settings`,
		path: '/dev-settings',
		component: <LazyDevSettings />,
		roles: ROLES.DEV,
	},
	{
		title: 'Unauthorized',
		description: `User does not have access to the following page.`,
		path: '/unauthorized',
		component: <LazyUnauthorized />,
	},
	{
		title: 'Login',
		description: `Login to the app.`,
		path: '/login',
		component: <LazyLogin />,
	},
	{
		title: 'Not Found',
		description: `The page you are looking for might have been removed had its name changed or is temporarily unavailable.`,
		path: '/not-found',
		component: <LazyNotFound />,
	},
].map(mapBasePathForRoutes);

// const MENU_PAGES = [];

const SHARED_DISPLAY_PAGES = [
	// Public Paths
	...[
		{
			label: 'Home',
			tooltip: `Landing Page`,
			to: '/',
			// icon: HomeIcon
		},
	],
	// Private Paths
	...[
		{
			label: 'Dashboard',
			tooltip: 'Dashboard',
			text: 'Dashboard',
			to: '/dashboard',
		},
		{
			label: 'Preferences',
			tooltip: 'Preferences',
			text: 'Preferences',
			to: '/preferences',
		},
	].map(e => ({ ...e, roles: TEMP_TEST_ROLES })),
	{
		label: 'Account',
		tooltip: 'Account',
		// icon: AccountIcon,
		disabled: true,
	},
].map(mapBasePathForLinks);

const NAV_LIST = [...SHARED_DISPLAY_PAGES];

const NAV_LIST_MOBILE = [
	...SHARED_DISPLAY_PAGES,
	// {
	// 	label: 'Menu',
	// 	tooltip: 'Other pages',
	// 	menuItems: MENU_PAGES,
	// },
	{
		label: 'Account',
		tooltip: 'Account',
		// icon: AccountIcon,
		disabled: true,
	},
].map(mapBasePathForLinks);

export { BASE_PATH, ROUTE_LIST, NAV_LIST, NAV_LIST_MOBILE };
