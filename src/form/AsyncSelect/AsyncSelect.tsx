import React from 'react';
import { ComponentProps } from 'react';
import ReactSelectAsyncSelect from 'react-select/async';
import getAMSStyles from './AsyncSelectStyles';

export type Props = {
	error?: boolean;
	zIndexMenu?: number;
} & ComponentProps<typeof ReactSelectAsyncSelect>;

type TypeaheadProps = {
	_display: string;
	uri: string;
};

type typeAheadResponse = {
	label: string;
	content: TypeaheadProps[];
};

function handleErrors(response: Response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}

const typeAhead = (inputValue: string) => {
	if (inputValue?.length < 3) {
		return Promise.resolve([]);
	}
	const url = `https://api.data.amsterdam.nl/atlas/typeahead/bag/?format=json&q=${inputValue}`;
	return fetch(url)
		.then(handleErrors)
		.then((response) => response.json())
		.then((data: typeAheadResponse[]) => {
			if (!data.length) {
				return [];
			}
			const streetnames = 'Straatnamen' == data[0].label ? data[0].content : [];
			return streetnames.map((item) => ({ label: item._display, value: item._display }));
		})
		.catch((error) => console.log(error));
};

// Todo: make this a reusable component, the typeahead above should be moved to AIP
// Get possible streetnames by location https://api.data.amsterdam.nl/geosearch/bag/?lat=52.3912316&lon=4.954566&radius=100
// Todo: what if API is down? -> show error message?
// Todo: what if API is slow? -> show loading indicator?
// Todo: what if API returns no results? -> show no results message?
// Todo: what if API returns an error? -> show error message?
// Todo: what if prefilled value is not available in API? -> show error message?

export const AsyncSelect: React.FC<Props> = ({ inputId, options, value, error, ...props }) => {
	return (
		<ReactSelectAsyncSelect
			styles={getAMSStyles({ error, ...props })}
			value={value}
			inputId={inputId}
			openMenuOnFocus
			cacheOptions
			defaultOptions
			loadOptions={typeAhead}
			{...props}
		/>
	);
};

export default AsyncSelect;
