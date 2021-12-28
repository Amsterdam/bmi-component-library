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
			id={id}
			isClearable
			onChange={(val) => console.log('onChange', val)}
			// onInputChange={(val) => console.log('onInputChange', val)}
			onCreateOption={(option) => console.log('onCreateOption', option)}
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
