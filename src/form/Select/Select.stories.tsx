import type { StoryFn, Meta } from '@storybook/react';
import { Select } from './Select';
import { options } from './__stubs__/options';

const meta: Meta<typeof Select> = {
	title: 'form/Select',
	component: Select,
	args: {
		maxWidth: '100%',
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
};

const Template: StoryFn<typeof Select> = (props) => <Select options={options} {...props} />;

const TemplateWithPrefilledValue: StoryFn<typeof Select> = (props) => (
	<Select
		options={options}
		defaultValue={{ label: 'Milieutechnisch onderzoek', value: 'Milieutechnisch onderzoek' }}
		{...props}
	/>
);

export const Default = Template.bind({});

export const DefaultValue = TemplateWithPrefilledValue.bind({});

export default meta;
