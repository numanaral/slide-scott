import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import ThemeToggle from 'containers/ThemeToggle';
import Links from './Links';

const TopNavigationBar = themeProps => {
	return (
		<AppBar position="sticky">
			<Toolbar>
				<Links />
				<div style={{ flexGrow: 1 }} />
				<ThemeToggle {...themeProps} />
			</Toolbar>
		</AppBar>
	);
};

export default TopNavigationBar;
