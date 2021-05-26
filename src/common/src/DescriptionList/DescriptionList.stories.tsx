import React, { ComponentProps } from 'react';
import { Tag } from '@amsterdam/asc-ui';
import { Story } from '@storybook/react';
import DescriptionList from './DescriptionList';

export default {
	title: 'common/DescriptionList',
	component: DescriptionList,
};

const Template: Story<ComponentProps<typeof DescriptionList>> = (args) => <DescriptionList {...args} />;

const descriptionList: ComponentProps<typeof DescriptionList>['list'] = [
	{
		label: 'Datum',
		value: '12-03-2021',
	},
	{
		label: 'Batch',
		value: 'Werkpakket Ingenieursdiensten contract PBK',
	},
	{
		label: 'Conditie',
		value: <Tag>Redelijk</Tag>,
	},
];

export const Default = Template.bind({});
Default.args = {
	heading: 'Ingenieursbureau werkpakket PBK',
	list: descriptionList,
};

export const WithoutHeader = Template.bind({});
WithoutHeader.args = {
	list: descriptionList,
};
