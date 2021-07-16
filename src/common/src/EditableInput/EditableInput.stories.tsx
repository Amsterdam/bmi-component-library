//@ts-nocheck

import React from 'react';
import { Story } from '@storybook/react';
import EditableInput from './EditableInput';

export default {
	title: 'common/EditableInput',
	component: EditableInput,
};

const Template: Story<React.ComponentProps<typeof EditableInput>> = (args) => <EditableInput {...args} />;

export const Default = Template.bind({});
Default.args = {
	id: 'Document omschrijving',
	data: 'Brug Centrum',
};
