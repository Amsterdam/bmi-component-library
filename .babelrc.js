module.exports = (api) => {
	api.cache(true);

	return {
		plugins: [
			[
				'babel-plugin-styled-components',
				{
					pure: true,
					namespace: 'sc-',
				},
			],
			// "react-hot-loader/babel"
			// '@babel/plugin-transform-destructuring',
		],
		presets: [
			[
				'@babel/preset-env',
				{
					debug: false,
					modules: false,
					useBuiltIns: 'entry',
					corejs: 3,
				},
			],
			'@babel/preset-react',
			'@babel/preset-typescript',
		],
		env: {
			test: {
				presets: [
					[
						'@babel/preset-env',
						{
							targets: {
								node: 'current',
							},
						},
					],
					'@babel/preset-react',
					'@babel/preset-typescript',
				],
				plugins: ['@babel/plugin-transform-typescript'],
			},
			production: {
				plugins: [['react-remove-properties', { properties: ['data-testid'] }]],
			},
		},
	};
};
