import React from 'react';
import { AppBar, Link, Toolbar, useTheme } from '@material-ui/core';
import ThemeToggle from 'containers/ThemeToggle';
import { Link as ReactRouterLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Menu from 'components/Menu';
import useMenu from 'components/Menu/useMenu';
import useLogin from 'store/firebase/hooks/useLogin';
import { AccountIcon } from 'icons';
import useAuth from 'store/firebase/hooks/useAuth';
import { BASE_PATH } from 'routes/constants';
import Spacer from 'components/Spacer';
import Links from './Links';
import logo from './full-logo.png';
// import logo from './full-logo-transparent.png';

const StyledAppBar = styled(AppBar)`
	${({ theme }) => `
		background-color: ${
			theme.palette.secondary[
				(theme.palette.type === 'dark' && 'dark') || 'main'
			]
		};
	`}
`;

const StyledLink = styled(Link)`
	position: absolute;
	left: 0;
	right: 0;
	margin: auto;
	text-align: center;
	top: 0;
	height: 80px;
	border-radius: 20px;
	width: 260px;
`;

const LogoPlaceholder = styled.img`
	width: 300px;
`;

const StyledLogo = styled.img`
	height: 80px;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
`;

const NAVIGATION_BAR_HEIGHT = 64;

const TopNavigationBar = () => {
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
					backgroundColor: theme.palette.secondary.main,
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
		<StyledAppBar position="sticky" color="secondary">
			<Toolbar>
				<div style={{ flexGrow: 1 }} />
				<Links />
				<LogoPlaceholder />
				<StyledLink component={ReactRouterLink} to="/">
					<StyledLogo src={logo} alt="logo" />
				</StyledLink>
				<div style={{ flexGrow: 1 }} />
				<ThemeToggle />
				<Menu {...menuProps} />
				<div style={{ flexGrow: 1 }} />
			</Toolbar>
		</StyledAppBar>
	);
};

export { NAVIGATION_BAR_HEIGHT };
export default TopNavigationBar;
