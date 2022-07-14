import React from 'react';
import { GlobalStyle, ThemeProvider } from '@amsterdam/asc-ui';
import { ThemeProvider as MUIThemeProvider } from '@mui/material';
import muiTheme from '../src/theme/material-ui-theme';
import theme from '../src/theme/theme';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		expanded: true,
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	order: ['Common', 'Form', 'Theme'],
};

export const decorators = [
	(Story) => (
		<MUIThemeProvider theme={muiTheme}>
			<ThemeProvider overrides={theme}>
				<GlobalStyle />
				<Story />
			</ThemeProvider>
		</MUIThemeProvider>
	),
];
