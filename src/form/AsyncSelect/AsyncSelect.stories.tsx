import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AsyncSelect } from './AsyncSelect';

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

export default {
	title: 'form/AsyncSelect',
	component: AsyncSelect,
	args: {
		inputId: 'asyncSelect',
	},
	argTypes: { onChange: { action: 'change' } },
} as ComponentMeta<typeof AsyncSelect>;

const Template: ComponentStory<typeof AsyncSelect> = (props) => <AsyncSelect loadOptions={typeAhead} {...props} />;

export const Default = Template.bind({});
Default.args = {
	noOptionsMessage: () => 'Geen resultaten',
	placeholder: 'Zoek een straatnaam',
};
