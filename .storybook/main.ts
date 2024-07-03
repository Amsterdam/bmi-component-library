import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(ts|tsx)'],
	staticDirs: [{ from: '../src/assets', to: '/assets' }],
	addons: ['@storybook/addon-essentials', '@storybook/addon-webpack5-compiler-swc'],
	framework: '@storybook/react-webpack5',
	swc: () => ({
		jsc: {
		  transform: {
			react: {
			  runtime: 'automatic'
			}
		  }
		}
	  }),
};

export default config;
