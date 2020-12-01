import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { func } from 'prop-types';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider as ScThemeProvider } from 'styled-components';

import getMuiTheme, { ConstGlobalStyle, VariantGlobalStyle } from 'theme';
import { makeSelectTheme } from 'store/redux/reducers/userPreference/selectors';
import { toggleTheme } from 'store/redux/reducers/userPreference/actions';

export const ThemeProvider = ({ children }) => {
	const dispatch = useDispatch();
	const onToggleTheme = useCallback(() => dispatch(toggleTheme()), [
		dispatch,
	]);
	const theme = useSelector(makeSelectTheme());

	const themeConfig = getMuiTheme(theme);

	return (
		<StylesProvider injectFirst>
			<MuiThemeProvider theme={themeConfig}>
				<ScThemeProvider theme={themeConfig}>
					<CssBaseline />
					{children({ theme, setTheme: onToggleTheme })}
				</ScThemeProvider>
			</MuiThemeProvider>
			<ConstGlobalStyle />
			<VariantGlobalStyle $theme={themeConfig} />
		</StylesProvider>
	);
};

ThemeProvider.propTypes = {
	children: func.isRequired,
};

export default ThemeProvider;
