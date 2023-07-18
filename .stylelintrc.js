module.exports = {
	extends: ['stylelint-config-standard'],
	customSyntax: 'postcss-styled-syntax',
	// new config taken from https://styled-components.com/docs/tooling#stylelint
	rules: {
		'selector-class-pattern': null,
		'media-query-no-invalid': null,
	},
};
