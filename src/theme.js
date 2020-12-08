import {
	responsiveFontSizes,
	// createMuiTheme,
	// Deals with the deprecated "findDOMNode" method for <React.StrictMode />
	// eslint-disable-next-line camelcase
	unstable_createMuiStrictModeTheme,
} from '@material-ui/core/styles';
// import { blue, pink } from '@material-ui/core/colors';
import { createGlobalStyle } from 'styled-components';
import 'fontsource-montserrat';
import {
	DARK_THEME,
	LIGHT_THEME,
} from 'store/redux/reducers/userPreference/constants';

const TRANSITION_CSS_PROPS = [
	'background',
	'background-color',
	// 'color',
	'border-color',
	'fill',
	'stroke',
	'box-shadow',
];
const THEME_TRANSITION_DURATION = 0.3;
const transitionGenerator = (
	cssProps = TRANSITION_CSS_PROPS,
	duration = THEME_TRANSITION_DURATION
) => cssProps.map(p => `${p} ${duration}s ease-out`).join(', ');

const THEME_COLOR_TRANSITION = transitionGenerator();

const ConstGlobalStyle = createGlobalStyle`
		html,
		body,
		#root {
			width: 100%;
			height: 100%;
			min-height:100%;
			min-width:100%;
			margin: 0;
			padding: 0;
			overflow: hidden;
		}
		
		/* body {
			overflow: auto;
		} */
		#root {
			transition: ${THEME_COLOR_TRANSITION};
			overflow: auto;
			position: relative;
			overflow-y: hidden;
		}

		pre {
			white-space: pre-wrap;
			word-wrap: break-word;
		}

		.theme-duration-wrapper {
			transition: ${THEME_COLOR_TRANSITION};
		}

		/* #region SCROLLBARS */

		* {
			scrollbar-color: black transparent;
			scrollbar-width: thin;
		}

		/* width */
		::-webkit-scrollbar {
			width: 5px;
			height: 6px;
		}

		/* Track */
		::-webkit-scrollbar-track {
			/* background: transparent; */
			background: #bfbfbf;
		}

		/* Handle */
		::-webkit-scrollbar-thumb {
			/* background: rgb(44, 44, 44); */
			background: black;
			border-radius: 10px;
		}

		/* Handle on hover */
		::-webkit-scrollbar-thumb:hover {
			background: rgba(0, 0, 0, 0.7);
		}

		/* #endregion */

`;

const VariantGlobalStyle = createGlobalStyle`
	${({ $theme }) => `
		#root {
			background-color: ${$theme.palette.background.level1};
		}
		/* #region CHROME AUTOCOMPLETE DEFAULT */
		
		/* https://stackoverflow.com/a/14205976/13161405 */
		/* Change the white to any color */
		input:-webkit-autofill,
		input:-webkit-autofill:hover, 
		input:-webkit-autofill:focus, 
		input:-webkit-autofill:active  {
			-webkit-box-shadow: 0 0 0 30px ${
				$theme.palette.background.default
			} inset !important;
		}

		/* Change text in autofill textbox */
		input:-webkit-autofill {
			-webkit-text-fill-color: ${$theme.palette.getContrastText(
				$theme.palette.background.default
			)} !important;
		}

		/* #endregion */
	`}
`;

// const defaultTheme = createMuiTheme();
const defaultTheme = unstable_createMuiStrictModeTheme();

const DEFAULT_THEME = DARK_THEME;
const PRIMARY_COLOR = '#30BFCE';
const SECONDARY_COLOR = '#FFB249';
const appThemes = [DARK_THEME, LIGHT_THEME];
const getThemeOptions = (
	mode,
	{ primaryColor, secondaryColor } = {
		primaryColor: PRIMARY_COLOR,
		secondaryColor: SECONDARY_COLOR,
	}
) => {
	const isDark = mode === DARK_THEME;
	return {
		palette: {
			type: mode,
			// primary: blue,
			primary: {
				// light: '#71f2ff',
				main: primaryColor || PRIMARY_COLOR,
				// dark: '#008e9d',
				contrastText:
					(isDark && '#fff') ||
					defaultTheme.palette.getContrastText('#30BFCE'),
			},
			// secondary: pink,
			secondary: {
				// light: '#ffe479',
				main: secondaryColor || SECONDARY_COLOR,
				// dark: '#c88214',
				contrastText:
					(isDark && '#fff') ||
					defaultTheme.palette.getContrastText('#FFB249'),
			},
			error: {
				light: '#e57373',
				main: '#f44336',
				// main: red[300],
				dark: '#d32f2f',
				contrastText: '#fff',
				alertBackground: (isDark && '#180605') || '#fdecea',
				alertText: (isDark && '#fab3ae') || '#611a15',
			},
			warning: {
				light: '#ffb74d',
				main: '#ff9800',
				dark: '#f57c00',
				contrastText: 'rgba(0, 0, 0, 0.87)',
				alertBackground: (isDark && '#190f00') || '#fff4e5',
				alertText: (isDark && '#ffd599') || '#663c00',
			},
			info: {
				light: '#64b5f6',
				main: '#2196f3',
				dark: '#1976d2',
				contrastText: '#fff',
				alertBackground: (isDark && '#030e18') || '#e8f4fd',
				alertText: (isDark && '#a6d5fa') || '#0d3c61',
			},
			success: {
				light: '#81c784',
				main: '#4caf50',
				dark: '#388e3c',
				contrastText: 'rgba(0, 0, 0, 0.87)',
				alertBackground: (isDark && '#071107') || '#edf7ed',
				alertText: (isDark && '#b7dfb9') || '#1e4620',
			},
			black: '#121212',
			background: (isDark && {
				// l1 and paper from https://overreacted.io/
				default: '#212121',
				level1: '#282c35',
				level2: '#333',
				paper: '#363c48',
			}) || {
				default: '#fff',
				level1: '#ededed',
				level2: '#e2e2e2',
				paper: '#f5f5f5',
			},
		},
		typography: {
			fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
		},
		overrides: {
			MuiPaper: {
				root: {
					transition: THEME_COLOR_TRANSITION,
				},
			},
			MuiGrid: {
				root: {
					transition: THEME_COLOR_TRANSITION,
				},
			},
			MuiTypography: {
				root: {
					transition: transitionGenerator(['color']),
				},
			},
			MuiIcon: {
				root: {
					transition: THEME_COLOR_TRANSITION,
				},
			},
			MuiListItemIcon: {
				root: {
					transition: transitionGenerator(['color']),
				},
			},
			MuiSvgIcon: {
				root: {
					transition: THEME_COLOR_TRANSITION,
				},
			},
			MuiListItem: {
				secondaryAction: {
					[defaultTheme.breakpoints.down('xs')]: {
						paddingRight: 16,
					},
				},
			},
			MuiListItemSecondaryAction: {
				root: {
					[defaultTheme.breakpoints.down('xs')]: {
						top: 40,
						left: 0,
						right: 0,
						position: 'relative',
						transform: 'translateY(-50%)',
						textAlign: 'center',
						marginBottom: 20,
						paddingBottom: 30,
						borderBottom: '1px solid',
						'& > *': {
							width: `calc(100% - ${defaultTheme.spacing(4)}px)`,
							'&.tooltip-wrapper > button': {
								width: `calc(100% - ${defaultTheme.spacing(
									4
								)}px)`,
							},
						},
					},
				},
			},
			MuiToggleButtonGroup: {
				root: {
					[defaultTheme.breakpoints.down('xs')]: {
						justifyContent: 'center',
					},
				},
			},
		},
	};
};

/**
 * Generates an extended MUI Theme
 *
 * @param {String} mode - dark|light
 *
 * @returns {import('@material-ui/core/styles/unstable_createMuiStrictModeTheme').Theme} mode
 * //returns {import('@material-ui/core/styles/createMuiTheme').Theme} mode
 */
const getMuiTheme = (mode, colors) =>
	responsiveFontSizes(
		unstable_createMuiStrictModeTheme(getThemeOptions(mode, colors))
	);
// responsiveFontSizes(createMuiTheme(getThemeOptions(mode)));

export {
	DEFAULT_THEME,
	PRIMARY_COLOR,
	SECONDARY_COLOR,
	ConstGlobalStyle,
	VariantGlobalStyle,
	appThemes,
};

export default getMuiTheme;
