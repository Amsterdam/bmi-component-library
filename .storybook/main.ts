import type { StorybookConfig } from '@storybook/react-webpack5';
const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(ts|tsx)'],
	staticDirs: [{ from: '../src/assets', to: '/assets' }],
	addons: ['storybook-addon-swc', '@storybook/addon-essentials'],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	docs: {
		autodocs: true,
	},
};
export default config;
