import React from 'react';
import { ComponentProps } from 'react';
import { components, DropdownIndicatorProps } from 'react-select';
import ReactSelectAsyncSelect from 'react-select/async';
import { DropdownIndicatorStyle, getAsyncSelectStyle } from './AsyncSelectStyles';

export type Props = {
	error?: boolean;
	zIndexMenu?: number;
} & ComponentProps<typeof ReactSelectAsyncSelect>;

const DropdownIndicator = (props: DropdownIndicatorProps) => {
	return (
		<components.DropdownIndicator {...props}>
			<DropdownIndicatorStyle />
		</components.DropdownIndicator>
	);
};

export const AsyncSelect: React.FC<Props> = ({ inputId, options, value, error, ...props }) => {
	return (
		<ReactSelectAsyncSelect
			styles={getAsyncSelectStyle({ error, ...props })}
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
