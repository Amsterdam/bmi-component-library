/**
 * @fileoverview FormInput component is an the Input component wrapped as a react-hook-form component.
 */
import React from 'react';
import get from 'lodash/get';
import { RegisterOptions, UseFormRegister, Path, FieldValues, DeepMap, FieldError } from 'react-hook-form';
import { Input, InputProps } from '../Input/Input';
import { FormInputStyle, FormInputErrorMessageStyle } from './FormInputStyle';
import { ErrorMessage } from '@hookform/error-message';

/**
 * Both InputProps and our FormInputProps have a name.
 * These names are not the same thing either! The name in InputProps represents the native name on an HTML input element.
 * The name in FormInputProps is a Path to the field in our form.
 * We still want to be able to pass other native HTML attributes to our input.
 * We'd just like to exclude name from InputProps because we are defining name as a Path FormInputProps`
 */
export type FormInputProps<TFormValues> = {
	name: Path<TFormValues>;
	rules?: RegisterOptions;
	register?: UseFormRegister<TFormValues & FieldValues>;
	errors?: Partial<DeepMap<TFormValues, FieldError>>; // https://react-hook-form.com/ts#FieldErrors
} & Omit<InputProps, 'name'>;

export const FormInput = <TFormValues extends Record<string, unknown>>({
	name,
	register,
	rules,
	errors,
	...props
}: FormInputProps<TFormValues>): JSX.Element => {
	// If the name is in a FieldArray, it will be 'fields.index.fieldName' and errors[name] won't return anything, so we are using lodash get
	const errorMessages = get(errors, name);
	const hasError = !!(errors && errorMessages);

	return (
		<FormInputStyle aria-live="polite">
			<Input name={name} aria-invalid={hasError} {...props} {...(register && register(name, rules))} />
			<ErrorMessage
				errors={errors}
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				name={name as any}
				render={({ message }) => (
					<FormInputErrorMessageStyle role="alert">{message}</FormInputErrorMessageStyle>
				)}
			/>
		</FormInputStyle>
	);
};

Input.defaultProps = {};

Input.displayName = 'FormInput';

export default FormInput;
