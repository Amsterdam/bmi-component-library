import React, { useState } from 'react';
import { Story } from '@storybook/react';
import DocumentTable, { Props } from './DocumentTable';
import { GridRowData } from '@material-ui/data-grid';
import ConfirmDialog, { confirm } from '../ConfirmDialog/ConfirmDialog';

export default {
	title: 'common/DocumentTable',
	component: DocumentTable,
};

const DocumentTableContainer: React.FC<Props> = ({ rows, ...props }) => {
	const [tableRows, setRows] = useState<GridRowData[]>(rows);

	return (
		<>
			<DocumentTable
				{...props}
				rows={tableRows}
				onRemove={(id) =>
					confirm({
						title: 'Waarschuwing',
						message: 'Weet u zeker dat u dit document definitief wilt verwijderen?',
						onConfirm: () => setRows(tableRows.filter((row) => row.id !== id)),
					})
				}
			/>
			<ConfirmDialog />
		</>
	);
};

const Template: Story<React.ComponentProps<typeof DocumentTable>> = (args) => (
	<DocumentTableContainer {...args} pageSize={3} />
);
const rows: GridRowData[] = [
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
	{
		id: 3,
		filename: 'Metingen',
		documentDescription: 'Conditiemetingen bestaande objecten',
		documentType: 'SOK',
		year: 2021,
	},
	{
		id: 4,
		filename: 'Overzichtskaart 2',
		documentDescription: 'Geotechnisch onderzoek',
		documentType: 'SOK',
		year: 2021,
	},
	{
		id: 5,
		filename: 'Foto onderkant',
		documentDescription: 'Bouwkundig onderzoek',
		documentType: 'SOK',
		year: 2021,
	},
];

export const Default = Template.bind({});
Default.args = {
	rows,
	disableFilterRow: false,
	disableRemoval: false,
};
