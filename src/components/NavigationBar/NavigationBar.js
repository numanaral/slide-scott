import React from 'react';
import { AppBar, Link, Toolbar, useTheme } from '@material-ui/core';
import ThemeToggle from 'containers/ThemeToggle';
import { Link as ReactRouterLink, useHistory } from 'react-router-dom';

import Menu from 'components/Menu';
import useMenu from 'components/Menu/useMenu';
import useLogin from 'store/firebase/hooks/useLogin';
import { AccountIcon } from 'icons';
import useAuth from 'store/firebase/hooks/useAuth';
import { BASE_PATH } from 'routes/constants';
import Links from './Links';
import logo from './full-logo.png';

const NAVIGATION_BAR_HEIGHT = 64;

const TopNavigationBar = themeProps => {
	const { logOut } = useLogin();
	const { isLoggedIn, user } = useAuth();
	const { push } = useHistory();
	const theme = useTheme();

	const onLogOut = () => {
		logOut();
		// TODO: Have a global PATH mapper/object....
		// Don't know why I didn't do this in the beginning
		push(`${BASE_PATH}/`);
	};

	const menuProps = useMenu({
		label: (!isLoggedIn && 'Account') || user.displayName || user.email,
		small: true,
		menuProps: {
			PaperProps: {
				style: {
					backgroundColor: theme.palette.primary.main,
				},
			},
		},
		icon: AccountIcon,
		options: (isLoggedIn && [
			{ label: 'Log Out', value: 'logout' },
			{ label: 'Preferences', value: '/preferences' },
		]) || [
			{ label: 'Log In', value: '/login' },
			{ label: 'Sign Up', value: '/signup' },
		],
		onClick: v => {
			if (v === 'logout') {
				onLogOut();
				return;
			}
			push(BASE_PATH + v);
		},
		...(!isLoggedIn && { iconMenu: true }),
	});

	return (
		<AppBar position="sticky">
			<Toolbar>
				<Link component={ReactRouterLink} to="/">
					<img
						src={logo}
						alt="logo"
						height="45px"
						style={{ borderRadius: 10 }}
					/>
				</Link>
				<Links />
				<div style={{ flexGrow: 1 }} />
				<ThemeToggle {...themeProps} />
				<Menu {...menuProps} />
			</Toolbar>
		</AppBar>
	);
};

export { NAVIGATION_BAR_HEIGHT };
export default TopNavigationBar;
