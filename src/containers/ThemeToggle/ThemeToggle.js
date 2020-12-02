import React, { useCallback } from 'react';
import { yellow, indigo } from '@material-ui/core/colors';

import Toggle from 'components/Toggle';
import { LightThemeIcon, DarkThemeIcon } from 'icons';
import { useDispatch, useSelector } from 'react-redux';
import { makeSelectTheme } from 'store/redux/reducers/userPreference/selectors';
import { toggleTheme } from 'store/redux/reducers/userPreference/actions';
import { propTypes } from './prop-types';

const ThemeToggle = () => {
	const theme = useSelector(makeSelectTheme());
	const dispatch = useDispatch();

	const setTheme = useCallback(() => {
		dispatch(toggleTheme());
	}, []);

	return (
		<Toggle
			value={theme}
			onChange={setTheme}
			options={[
				{
					value: 'dark',
					// label: 'Dark',
					icon: <DarkThemeIcon style={{ color: indigo.A700 }} />,
				},
				{
					value: 'light',
					// label: 'Light',
					icon: <LightThemeIcon style={{ color: yellow[500] }} />,
				},
			]}
		/>
	);
};

ThemeToggle.propTypes = propTypes;

export default ThemeToggle;
