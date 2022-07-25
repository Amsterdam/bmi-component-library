import React from 'react';
import { GlobalStyle, ThemeProvider } from '@amsterdam/asc-ui';
import { ThemeProvider as MUIThemeProvider } from '@mui/material';
import muiTheme from '../src/theme/material-ui-theme';
import theme from '../src/theme/theme';
import { generateHiddenControls, HTML_EVENT_CONTROL_NAMES } from '../src/utils/storybook';

export const parameters = {
	actions: { argTypesRegex: '^on.*' },
	controls: {
		expanded: true,
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	order: ['Common', 'Form', 'Theme'],
};
// new since 6.5 https://github.com/storybookjs/storybook/issues/11697
export const argTypes = generateHiddenControls(HTML_EVENT_CONTROL_NAMES);

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
