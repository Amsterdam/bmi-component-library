export const DISABLED_CONTROL = { description: 'Disabled control for this story', control: false };

export function generateDisabledControls(propertyNames: string[] = []): { [key: string]: typeof DISABLED_CONTROL } {
	if (!propertyNames.length) {
		return {};
	}

	return Object.assign(
		{},
		...propertyNames.map((val) => {
			return { [val]: DISABLED_CONTROL };
		}),
	);
}
