import React from 'react';
import { Story } from '@storybook/react';
import CreatableSelect, { Props } from './CreatableSelect';
import { options } from './__stubs__/options';

export default {
	title: 'form/CreatableSelect',
	component: CreatableSelect,
};

const Template: Story<Props> = ({ id = 'creatable-demo', ...props }) => {
	return (
		<CreatableSelect
			inputId={id}
			isClearable
			onChange={(val) => console.log('onChange', val)}
			options={options}
			{...props}
		/>
	);
};

export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {
	label: 'Documentomschrijving',
};

export const Preselected = Template.bind({});
Preselected.args = {
	label: 'Documentomschrijving',
	value: options[3],
};

export const WithError = Template.bind({});
WithError.args = {
	label: 'Documentomschrijving',
	value: '',
	error: true,
};
