import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AsyncSelect } from './AsyncSelect';

export default {
	title: 'form/AsyncSelect',
	component: AsyncSelect,
} as ComponentMeta<typeof AsyncSelect>;

const Template: ComponentStory<typeof AsyncSelect> = (props) => <AsyncSelect {...props} />;

export const Default = Template.bind({});
Default.args = {
	zIndexMenu: 9999,
};
