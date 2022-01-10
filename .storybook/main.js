module.exports = {
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
	staticDirs: [{ from: '../src/assets', to: '/assets' }],
};
