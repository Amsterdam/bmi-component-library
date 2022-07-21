import React, { useMemo } from 'react';
// import { Ellipsis } from '@amsterdam/asc-assets';
// import { TableHeader, TableBody, TableRow, TableCell, Switch, ContextMenuItem } from '@amsterdam/asc-ui';
import { StyledDecompositionTable } from './DecompositionTableStyles'
import DecompositionTableHeader from './DecompositionTableHeader';
import DecompositionTableContent from './DecompositionTableContent';

export type Props = {
	columns: any[];
	elements: any[];
	manifestations: any[];
};

const DecompositionTable: React.FunctionComponent<Props> = ({
	columns,
	elements,
	manifestations,
}: Props) => {
	const tableColumns = useMemo(() => {
		const cols = columns ?? [
			{
				field: 'code',
				headerName: 'Code',
			},
			{
				field: 'part',
				headerName: 'Deel',
			},
			{
				field: 'material',
				headerName: 'Materiaal',
			},
			{
				field: 'quantity',
				headerName: 'Hoeveelheid',
			},
			{
				field: 'unit',
				headerName: 'Eenheid',
			},
			{
				field: 'location',
				headerName: 'Locatie',
			},
			{
				field: 'year',
				headerName: 'Jaar',
			},
			{
				field: 'relevant',
				headerName: 'Relevant',
			},
			{
				field: 'actions',
				headerName: 'Acties',
			},
		];

		return cols;
	}, [columns]);

	return (
		<StyledDecompositionTable>
			<DecompositionTableHeader columns={tableColumns} />
			<DecompositionTableContent columns={tableColumns} elements={elements} manifestations={manifestations} />
		</StyledDecompositionTable>
	);
};

export default DecompositionTable;
