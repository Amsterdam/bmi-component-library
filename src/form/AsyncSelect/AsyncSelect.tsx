import React from 'react';
import { ComponentProps } from 'react';
import { components, DropdownIndicatorProps } from 'react-select';
import ReactSelectAsyncSelect from 'react-select/async';
import { DropdownIndicatorStyle, getAsyncSelectStyle } from './AsyncSelectStyles';

export type Props = {
	error?: boolean;
	zIndexMenu?: number;
} & ComponentProps<typeof ReactSelectAsyncSelect>;

// Todo: make this a reusable component, the typeahead above should be moved to AIP
// Get possible streetnames by location https://api.data.amsterdam.nl/geosearch/bag/?lat=52.3912316&lon=4.954566&radius=100
// Todo: what if API is down? -> show error message?
// Todo: what if API is slow? -> show loading indicator?
// Todo: what if API returns no results? -> show no results message?
// Todo: what if API returns an error? -> show error message?
// Todo: what if prefilled value is not available in API? -> show error message?

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
