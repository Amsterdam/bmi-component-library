import React from 'react';
import { ComponentProps } from 'react';
import ReactSelect from 'react-select';
import { getSelectStyle } from './SelectStyles';

import DropdownIndicator from './DropDownIndicator';
import SelectContainer from './SelectContainer';

export type Props = {
	error?: boolean;
	zIndexMenu?: number;
	maxWidth?: string;
	['data-testid']?: string;
} & ComponentProps<typeof ReactSelect>;

export const Select: React.FC<Props> = ({ inputId, options, value, error, ...props }) => {
	return (
		<ReactSelect
			styles={getSelectStyle({ error, ...props })}
			value={value}
			options={options}
			inputId={inputId}
			components={{ DropdownIndicator, SelectContainer }}
			openMenuOnFocus
			{...props}
		/>
	);
};

export default Select;
