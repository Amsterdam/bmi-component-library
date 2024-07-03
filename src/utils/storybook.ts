export const DISABLED_CONTROL = { description: 'Disabled control for this story', control: undefined };

export function generateDisabledControls(propertyNames: string[] = []): { [key: string]: typeof DISABLED_CONTROL } {
	return propertyNames.reduce((acc: Record<string, typeof DISABLED_CONTROL>, propertyName: string) => {
		acc[propertyName] = DISABLED_CONTROL;
		return acc;
	}, {});
}
