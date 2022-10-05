import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select';
import { options } from './__stubs__/options';

export default {
	title: 'form/Select',
	component: Select,
	args: {
		isDisabled: false,
		inputId: 'select',
		noOptionsMessage: () => 'Geen resultaten',
		placeholder: 'Zoek een type',
	},
	argTypes: {
		menuIsOpen: { control: 'boolean' },
		isClearable: { control: 'boolean' },
		isDisabled: { control: 'boolean' },
		isMulti: { control: 'boolean' },
		isSearchable: { control: 'boolean' },
		isLoading: { control: 'boolean' },
		onChange: { action: 'change' },
	},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (props) => <Select options={options} {...props} />;

const TemplateWithPrefilledValue: ComponentStory<typeof Select> = (props) => (
	<Select
		options={options}
		defaultValue={{ label: 'Milieutechnisch onderzoek', value: 'Milieutechnisch onderzoek' }}
		{...props}
	/>
);

export const Default = Template.bind({});

export const DefaultValue = TemplateWithPrefilledValue.bind({});
