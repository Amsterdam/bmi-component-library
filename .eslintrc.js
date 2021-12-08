module.exports = {
	env: {
		es6: true,
		node: true
	},
	extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/eslint-recommended", "plugin:storybook/recommended"],
	parserOptions: {
		ecmaVersion: 2018,
		// Allows for the parsing of modern ECMAScript features
		sourceType: 'module',
		// Allows for the use of imports
		ecmaFeatures: {
			jsx: true // Allows for the parsing of JSX
		}
	},
	parser: '@typescript-eslint/parser',
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [2, {
			args: 'none'
		}],
		'react/prop-types': 0,
		'react/jsx-boolean-value': 2,
		'react/no-array-index-key': 2
	},
	settings: {
		react: {
			version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
		}
	}
};
