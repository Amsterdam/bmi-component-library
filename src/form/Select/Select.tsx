import React from 'react';
import { ComponentProps } from 'react';
import ReactSelect, { components, DropdownIndicatorProps } from 'react-select';
import { DropdownIndicatorStyle, getSelectStyle } from './SelectStyles';

export type Props = {
	error?: boolean;
	zIndexMenu?: number;
	maxWidth?: string;
} & ComponentProps<typeof ReactSelect>;

export const DropdownIndicator = (props: DropdownIndicatorProps) => {
	return (
		<components.DropdownIndicator {...props}>
			<DropdownIndicatorStyle />
		</components.DropdownIndicator>
	);
};

export const Select: React.FC<Props> = ({ inputId, options, value, error, ...props }) => {
	return (
		<ReactSelect
			styles={getSelectStyle({ error, ...props })}
			value={value}
			options={options}
			inputId={inputId}
			components={{ DropdownIndicator }}
			openMenuOnFocus
			{...props}
		/>
	);
};

export default Select;
