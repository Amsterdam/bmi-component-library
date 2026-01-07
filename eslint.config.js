const { defineConfig } = require('eslint/config');

const globals = require('globals');
const tsParser = require('@typescript-eslint/parser');
const reactPlugin = require('eslint-plugin-react');
const tsEslintPlugin = require('@typescript-eslint/eslint-plugin');
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
			reactPlugin,
			'@typescript-eslint': tsEslintPlugin,
		},

		rules: {
			'@typescript-eslint/ban-ts-ignore': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'no-unused-vars': 'off',

			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					args: 'none',
				},
			],

			'react/prop-types': 'off',
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
