import { action } from '@storybook/addon-actions';

/**
 * This array holds the native HTML event props that where used inside the .storybook/main.js propFilter for reactDocgen
 * These events are registered as action and by default hidden from the controls, see .storybook/preview.js
 * More controls info, see https://storybook.js.org/docs/react/essentials/controls
 */
export const HTML_EVENT_CONTROL_NAMES = [
	'onChange',
	'onBlur',
	'onFocus',
	'onInput',
	'onReset',
	'onSubmit',
	'onError',
	'onClick',
];

export const DISABLED_CONTROL = { description: 'Disabled control for this story', control: false };

export const HIDDEN_CONTROL = { table: { disable: true } };

export function generateDisabledControls(propertyNames: string[] = []): { [key: string]: typeof DISABLED_CONTROL } {
	return propertyNames.reduce((acc: Record<string, typeof DISABLED_CONTROL>, propertyName: string) => {
		acc[propertyName] = DISABLED_CONTROL;
		return acc;
	}, {});
}

export function generateHiddenControls(propertyNames: string[] = []): { [key: string]: typeof HIDDEN_CONTROL } {
	return propertyNames.reduce((acc: Record<string, typeof HIDDEN_CONTROL>, propertyName: string) => {
		acc[propertyName] = HIDDEN_CONTROL;
		return acc;
	}, {});
}

export const handleSubmitSuccess = (data: any) => {
	action('[React Hooks Form] handleSubmitSuccess')(data);
	console.log('[React Hooks Form] handleSubmitSuccess', data);
};

export const handleSubmitError = (data: any) => {
	action('[React Hooks Form] handleSubmitError')(data);
	console.log('[React Hooks Form] handleSubmitError', data);
};
