import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@amsterdam/asc-ui';
import theme from '../theme/theme';

const AllTheProviders: React.FC = ({ children }) => <ThemeProvider overrides={theme}>{children}</ThemeProvider>;

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
	render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
