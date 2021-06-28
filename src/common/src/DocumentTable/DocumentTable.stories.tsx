import React from 'react';
import { Story } from '@storybook/react';
import DocumentTable from './DocumentTable';

export default {
	title: 'common/DocumentTable',
	component: DocumentTable,
};

const Template: Story<React.ComponentProps<typeof DocumentTable>> = (args) => {
	return <DocumentTable {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	rows: [
		{
			id: 1,
			filename: 'Bouwfoto1',
			documentDescription: 'Bouwkundig onderzoek',
			documentType: 'SOK',
			year: 2021,
		},
		{
			id: 2,
			filename: 'Overzichtskaart',
			documentDescription: 'Geotechnisch onderzoek',
			documentType: 'SOK',
			year: 2021,
		},
	],
	disableFilterRow: false,
	disableRemoval: false,
};
