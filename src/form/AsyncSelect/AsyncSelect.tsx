import React from 'react';
import { ComponentProps } from 'react';
import ReactSelectAsyncSelect from 'react-select/async';
import { getSelectStyle } from './AsyncSelectStyles';
import { DropdownIndicator } from '../Select/Select';

export type Props = {
	error?: boolean;
	zIndexMenu?: number;
} & ComponentProps<typeof ReactSelectAsyncSelect>;

export const AsyncSelect: React.FC<Props> = ({ inputId, options, value, error, ...props }) => {
	return (
		<ReactSelectAsyncSelect
			styles={getSelectStyle({ error, ...props })}
			value={value}
			inputId={inputId}
			components={{ DropdownIndicator }}
			openMenuOnFocus
			cacheOptions
			defaultOptions
			{...props}
		/>
	);
};

export default AsyncSelect;
