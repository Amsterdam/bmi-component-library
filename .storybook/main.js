module.exports = {
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-a11y',
	],
	staticDirs: [{ from: '../src/assets', to: '/assets' }],
	refs: {
		'design-system': {
			title: "Amsterdam Styled Components",
			// url: "https://alimpens.github.io/asc-beta/",
			url: "https://amsterdam.github.io/amsterdam-styled-components",
		}
	}
};
