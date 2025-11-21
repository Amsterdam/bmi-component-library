const { defineConfig } = require('eslint/config');

const globals = require('globals');
const tsParser = require('@typescript-eslint/parser');
const react = require('eslint-plugin-react');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const js = require('@eslint/js');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

module.exports = defineConfig([
	{
		languageOptions: {
			globals: {
				...globals.node,
			},

			ecmaVersion: 2018,
			sourceType: 'module',

			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},

			parser: tsParser,
		},

		extends: compat.extends(
			'eslint:recommended',
			'plugin:react/jsx-runtime',
			'plugin:@typescript-eslint/eslint-recommended',
			'plugin:storybook/recommended',
		),

		plugins: {
			react,
			'@typescript-eslint': typescriptEslint,
		},

		rules: {
			'@typescript-eslint/ban-ts-ignore': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'no-unused-vars': 'off',

			'@typescript-eslint/no-unused-vars': [
				2,
				{
					args: 'none',
				},
			],

			'react/prop-types': 0,
			'react/jsx-boolean-value': 2,
			'react/no-array-index-key': 2,
		},

		settings: {
			react: {
				version: 'detect',
			},
		},
	},
]);
