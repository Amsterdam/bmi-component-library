import { StoryFn, Meta } from '@storybook/react';
import EditableInput from './EditableInput';

const meta: Meta<typeof EditableInput> = {
	title: 'common/EditableInput',
	component: EditableInput,
};

const Template: StoryFn<React.ComponentProps<typeof EditableInput>> = (args) => <EditableInput {...args} />;

export const Default = Template.bind({});
Default.args = {
	id: 'Document omschrijving',
	data: 'Brug Centrum',
};

export default meta;
