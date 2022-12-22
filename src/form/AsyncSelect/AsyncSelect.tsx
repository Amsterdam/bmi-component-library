import React from 'react';
import { ComponentProps } from 'react';
import ReactSelectAsyncSelect from 'react-select/async';
import { getSelectStyle } from './AsyncSelectStyles';
import { DropdownIndicator } from '../Select';
import { SelectContainer } from '../Select';

export type Props = {
	error?: boolean;
	zIndexMenu?: number;
	['data-testid']?: string;
} & ComponentProps<typeof ReactSelectAsyncSelect>;

export const AsyncSelect: React.FC<Props> = ({ inputId, options, value, error, ...props }) => {
	return (
		<ReactSelectAsyncSelect
			styles={getSelectStyle({ error, ...props })}
			value={value}
			inputId={inputId}
			components={{ DropdownIndicator, SelectContainer }}
			openMenuOnFocus
			cacheOptions
			defaultOptions
			{...props}
		/>
	);
};

export default AsyncSelect;
