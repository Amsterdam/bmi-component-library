module.exports = {
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
	staticDirs: [{ from: '../src/assets', to: '/assets' }],
	typescript: {
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			skipChildrenPropWithoutDoc: false,
			shouldRemoveUndefinedFromOptional: true,
			savePropValueAsString: false,
			propFilter: (prop) => {
				/**
				 * When props originate from a component in the asc lib we also want to include them in the storybook
				 */
				if (prop.declarations !== undefined && prop.declarations.length > 0) {
					const includePropInStory = prop.declarations.find((declaration) => {
						if (declaration.fileName.includes('node_modules/@amsterdam/asc-ui')) {
							return true;
						}

						return !declaration.fileName.includes('node_modules');
					});

					return Boolean(includePropInStory);
				}

				return true;
			},
		},
	},
};
