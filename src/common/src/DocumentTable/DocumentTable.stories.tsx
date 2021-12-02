import React from 'react';
import { Story } from '@storybook/react';
import DocumentTable from './DocumentTable';
import { documents } from '../DocumentTable/__stubs__/documents';

export default {
	title: 'common/DocumentTable',
	component: DocumentTable,
};

const Template: Story<React.ComponentProps<typeof DocumentTable>> = (args) => {
	return <DocumentTable {...args} pageSize={3} />;
};

export const Default = Template.bind({});
Default.args = {
	rows: documents,
	disableFilterRow: false,
	disableRemoval: false,
};
