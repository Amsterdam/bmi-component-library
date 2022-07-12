# BMI Component Library

A React component library based on [Amsterdam Styled Components](https://github.com/Amsterdam/amsterdam-styled-components) and [Material-UI](https://material-ui.com/) specifically aimed at repurposing and sharing domain specific components across BMI projects.

NOTE: If you are looking for a component library that is primarily focused on providing you with building blocks which are aligned with the [Amsterdam Design System](https://designsystem.amsterdam.nl/7awj1hc9f/p/39359e-design-system), then take a look at [Amsterdam Styled Components](https://github.com/Amsterdam/amsterdam-styled-components) instead.


## Getting started

To import components from this library you will to at least have followed the ASC [Getting Started](https://github.com/Amsterdam/amsterdam-styled-components/blob/main/docs/GETTING_STARTED.md) guide. 

There are also a number of components that make use of [MUI](https://mui.com/) components. You can follow the 
[Installation](https://mui.com/material-ui/getting-started/installation/) guide.
Make sure to configure a path in your TS config to create an override for styled-components as documented in the MUI 
getting started guide (it will render de emotion dependency redundant).

With both ASC en MUI configured you will have your application wrapped in 2 theme providers like so:
```tsx
import { muiTheme } from '@amsterdam/bmi-component-library';
import { ThemeProvider } from '@amsterdam/asc-ui';
import { ThemeProvider as MUIThemeProvider } from '@mui/material';
import theme from '../theme';

<MUIThemeProvider theme={muiTheme}>
	<ThemeProvider overrides={theme}>
		// ... styled ASC/MUI components
	</ThemeProvider>
</MUIThemeProvider>
```

## Unit tests

Unit tests are done with Jest and `@testing-library/react`.

To run the unit tests:
```shell
npm run test
```

## Storybook

To run storybook:
```shell
npm run start
```
