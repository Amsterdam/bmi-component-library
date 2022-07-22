import React, { Ref, forwardRef, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { InputStyle } from './InputStyle';

export type InputType = 'text' | 'email';

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	id: string;
	name: string;
	/**
	 * label Sets the `aria-label` attribute on the input element.
	 */
	label: string;
	placeholder?: string;
	type?: InputType;
	ref?: Ref<HTMLInputElement>;
	['aria-invalid']?: boolean;
	disabled?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ id, name, label, type, placeholder, ...props }: InputProps, ref) => {
		return (
			<InputStyle
				ref={ref}
				aria-label={label}
				name={name}
				id={id}
				type={type}
				placeholder={placeholder}
				{...props}
			/>
		);
	},
);

Input.defaultProps = {
	type: 'text',
};

Input.displayName = 'Input';

export default Input;
