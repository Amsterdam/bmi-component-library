import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AsyncSelect } from './AsyncSelect';
import { asyncOptions } from './__stubs__/options';

export default {
	title: 'form/AsyncSelect',
	component: AsyncSelect,
	args: {
		isDisabled: false,
		inputId: 'asyncSelect',
		noOptionsMessage: () => 'Geen resultaten',
		placeholder: 'Zoek een type',
	},
	argTypes: { onChange: { action: 'change' } },
} as ComponentMeta<typeof AsyncSelect>;

const Template: ComponentStory<typeof AsyncSelect> = (props) => <AsyncSelect loadOptions={asyncOptions} {...props} />;

const TemplateWithPrefilledValue: ComponentStory<typeof AsyncSelect> = (props) => (
	<AsyncSelect
		loadOptions={asyncOptions}
		defaultValue={{ label: 'Milieutechnisch onderzoek', value: 'Milieutechnisch onderzoek' }}
		{...props}
	/>
);

export const Default = Template.bind({});

export const DefaultValue = TemplateWithPrefilledValue.bind({});
