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
				// We want to allow some default HTML event props
				// If no filter is applied and a components owns HTMLElement props, all the props will be shown as Storybook controls
				const eventPropFound = [
					'onChange',
					'onBlur',
					'onFocus',
					'onInput',
					'onReset',
					'onSubmit',
					'onError',
					'onClick',
				].some((word) => prop.name === word);
				if (eventPropFound) {
					return true;
				}
				// Prevent all HTML properties of an element from being documented.
				if (prop.parent && prop.parent.fileName.includes('@types/react')) {
					return false;
				}

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
