import type { StoryFn, Meta } from '@storybook/react';
import CreatableSelect from './CreatableSelect';
import { options } from './__stubs__/options';

const meta: Meta<typeof CreatableSelect> = {
	title: 'form/CreatableSelect',
	component: CreatableSelect,
	argTypes: {
		isClearable: { control: 'boolean' },
		isDisabled: { control: 'boolean' },
		isMulti: { control: 'boolean' },
		isSearchable: { control: 'boolean' },
		isLoading: { control: 'boolean' },
		onChange: { action: 'change' },
	},
};

const Template: StoryFn<typeof CreatableSelect> = ({ id = 'creatable-demo', ...props }) => {
	return (
		<CreatableSelect
			inputId={id}
			isClearable
			onChange={(val) => console.log('onChange', val)}
			options={options}
			menuPlacement="bottom"
			{...props}
		/>
	);
};

export const Default = Template.bind({});
Default.args = {
	zIndexMenu: 9999,
};

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

export const MenuPortal = Template.bind({});
MenuPortal.storyName = 'Menu in portal';
MenuPortal.args = {
	menuPortalTarget: document.body,
	zIndexMenu: 9999,
	label: 'Documentomschrijving',
	value: '',
};

export default meta;
