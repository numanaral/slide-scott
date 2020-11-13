import React from 'react';
import { AppBar, Link, Toolbar } from '@material-ui/core';
import ThemeToggle from 'containers/ThemeToggle';
import { Link as ReactRouterLink } from 'react-router-dom';

import Links from './Links';
import logo from './full-logo.png';

const NAVIGATION_BAR_HEIGHT = 64;

const TopNavigationBar = themeProps => {
	return (
		<AppBar position="sticky">
			<Toolbar>
				<Link component={ReactRouterLink} variant="a" to="/">
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
			</Toolbar>
		</AppBar>
	);
};

export { NAVIGATION_BAR_HEIGHT };
export default TopNavigationBar;
