import type { StoryFn, Meta } from '@storybook/react';
import { AsyncSelect } from './AsyncSelect';
import { asyncOptions } from './__stubs__/options';

const meta: Meta<typeof AsyncSelect> = {
	title: 'form/AsyncSelect',
	component: AsyncSelect,
	args: {
		isDisabled: false,
		inputId: 'asyncSelect',
		noOptionsMessage: () => 'Geen resultaten',
		placeholder: 'Zoek een type',
	},
	argTypes: {
		isClearable: { control: 'boolean' },
		isDisabled: { control: 'boolean' },
		isMulti: { control: 'boolean' },
		isSearchable: { control: 'boolean' },
		isLoading: { control: 'boolean' },
		onChange: { action: 'change' },
	},
};

const Template: StoryFn<typeof AsyncSelect> = (props) => <AsyncSelect loadOptions={asyncOptions} {...props} />;

const TemplateWithPrefilledValue: StoryFn<typeof AsyncSelect> = (props) => (
	<AsyncSelect
		loadOptions={asyncOptions}
		defaultValue={{ label: 'Milieutechnisch onderzoek', value: 'Milieutechnisch onderzoek' }}
		{...props}
	/>
);

export const Default = Template.bind({});

export const DefaultValue = TemplateWithPrefilledValue.bind({});

export default meta;
