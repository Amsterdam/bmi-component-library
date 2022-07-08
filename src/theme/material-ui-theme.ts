import { createTheme } from '@mui/material/styles';
import { lighten, darken } from 'polished';
import theme from './theme';

/**
 * This is where we define the color palette for Material UI components
 * We map the colors defined in @amsterdam/asc-ui as much as we can
 */
const muiTheme = createTheme({
	typography: {
		fontFamily: theme.typography.fontFamily,
	},
	palette: {
		primary: {
			light: lighten(0.7, theme.colors?.primary?.main ?? '#7986cb'),
			main: theme.colors?.primary?.main ?? '#3f51b5',
			dark: theme.colors?.primary?.dark ?? '#303f9f',
			contrastText: theme.colors?.tint?.level1 ?? '#FFFFFF',
		},
		secondary: {
			light: lighten(0.1, theme.colors?.secondary?.main ?? '#ff4081'),
			main: theme.colors?.secondary?.main ?? '#f50057',
			dark: theme.colors?.secondary?.dark ?? '#c51162',
			contrastText: theme.colors?.tint?.level1 ?? '#FFFFFF',
		},
		error: {
			light: lighten(0.1, theme.colors?.error?.main ?? '#e57373'),
			main: theme.colors?.error?.main ?? '#e57373',
			dark: darken(0.1, theme.colors?.error?.main ?? '#e57373'),
			contrastText: theme.colors?.tint?.level1 ?? '#FFFFFF',
		},
		warning: {
			light: lighten(0.1, '#FF9100'),
			main: '#FF9100',
			dark: darken(0.1, '#FF9100'),
			contrastText: '#000',
		},
		info: {
			light: lighten(0.1, '#009DEC'),
			main: '#009DEC',
			dark: darken(0.1, '#009DEC'),
			contrastText: '#FFF',
		},
		success: {
			light: lighten(0.1, '#00A03C'),
			main: '#00A03C',
			dark: darken(0.1, '#00A03C'),
			contrastText: '#FFF',
		},
		grey: {
			50: lighten(0.2, theme.colors?.tint?.level2 ?? '#eeeeee'),
			100: lighten(0.1, theme.colors?.tint?.level2 ?? '#eeeeee'),
			200: theme.colors?.tint?.level2 ?? '#eeeeee',
			300: theme.colors?.tint?.level3 ?? '#e0e0e0',
			400: theme.colors?.tint?.level4 ?? '#bdbdbd',
			500: theme.colors?.tint?.level5 ?? '#9e9e9e',
			600: theme.colors?.tint?.level6 ?? '#757575',
			700: theme.colors?.tint?.level7 ?? '#616161',
			800: darken(0.1, theme.colors?.tint?.level7 ?? '#616161'),
			900: darken(0.2, theme.colors?.tint?.level7 ?? '#616161'),
			A100: theme.colors?.tint?.level2 ?? '#d5d5d5',
			A200: theme.colors?.tint?.level4 ?? '#aaaaaa',
			A400: theme.colors?.tint?.level6 ?? '#303030',
			A700: theme.colors?.tint?.level5 ?? '#616161',
		},
		text: {
			primary: theme.colors?.tint?.level7 ?? 'rgba(0, 0, 0, 0.87)',
			secondary: theme.colors?.tint?.level6 ?? 'rgba(0, 0, 0, 0.54)',
			disabled: theme.colors?.tint?.level5 ?? 'rgba(0, 0, 0, 0.38)',
			// hint: theme.colors?.tint?.level4 ?? 'rgba(0, 0, 0, 0.38)',
		},
		action: {
			active: 'rgba(0, 0, 0, 0.54)',
			hover: 'rgba(0, 0, 0, 0.04)',
			hoverOpacity: 0.04,
			selected: 'rgba(0, 0, 0, 0.08)',
			selectedOpacity: 0.08,
			disabled: 'rgba(0, 0, 0, 0.26)',
			disabledBackground: 'rgba(0, 0, 0, 0.12)',
			disabledOpacity: 0.38,
			focus: theme.colors?.support?.focus ?? 'rgba(0, 0, 0, 0.12)',
			focusOpacity: 0.12,
			activatedOpacity: 0.12,
		},
	},
});

export default muiTheme;
