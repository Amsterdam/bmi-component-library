import type {Args, ArgTypes, InputType} from '@storybook/types';

export const DISABLED_CONTROL: InputType = {
	description: 'Disabled control for this story',
	control: false,
};

export const generateDisabledControls = <T extends Args>(
	propertyNames: Array<keyof T & string>,
): Partial<ArgTypes<T>> =>
	propertyNames.reduce<Partial<ArgTypes<T>>>((acc, key) => {
		acc[key] = DISABLED_CONTROL as ArgTypes<T>[keyof T];
		return acc;
	}, {});
