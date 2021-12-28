import React from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from '@amsterdam/asc-ui';
import theme from '../theme/theme';
import { queries, Queries } from '@testing-library/dom';

const AllTheProviders: React.FC = ({ children }) => <ThemeProvider overrides={theme}>{children}</ThemeProvider>;

const customRender = <Q extends Queries = typeof queries, Container extends Element | DocumentFragment = HTMLElement>(
	ui: React.ReactElement,
	options: RenderOptions<Q, Container>,
): RenderResult<Q, Container> => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
