import React from 'react';
import { StyledDecompositionTable } from './DecompositionTableStyles';
import DecompositionTableHeader from './DecompositionTableHeader';
import DecompositionTableContent from './DecompositionTableContent';

export type Column = {
	headerName: 'Code' | 'Deel' | 'Materiaal' | 'Hoeveelheid' | 'Eenheid' | 'Locatie' | 'Jaar' | 'Relevant' | 'Acties';
	field: string;
};

const defaultColumns: Column[] = [
	{
		field: 'code',
		headerName: 'Code',
	},
	{
		field: 'name',
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
		// Element: no | Unit: yes | Manifestation: yes
		field: 'quantityUnitOfMeasurement',
		headerName: 'Eenheid',
	},
	{
		field: 'location',
		headerName: 'Locatie',
	},
	{
		field: 'constructionYear',
		headerName: 'Jaar',
	},
	{
		// Element: yes | Unit: yes | Manifestation: no
		field: 'isRelevant',
		headerName: 'Relevant',
	},
	// {
	// 	field: 'actions',
	// 	headerName: 'Acties',
	// },
];

export type DecompositionRowBase = {
	id: string;
	code: string;
	name: string;
	quantity: number;
	location: string;
	constructionYear: number;
};

export type ElementRow = DecompositionRowBase & {
	isRelevant: boolean;
};

export type UnitRow = DecompositionRowBase & {
	quantityUnitOfMeasurement: string;
	isRelevant: boolean;
	material: string;
	elementId: string;
};

export type ManifestationRow = DecompositionRowBase & {
	quantityUnitOfMeasurement: string;
	material: string;
	unitId: string;
};

export type DecompositionRow = ElementRow | UnitRow | ManifestationRow;

export type Props = {
	columns?: Column[];
	decomposition: DecompositionRow[];
};

const DecompositionTable: React.FunctionComponent<Props> = ({ columns = defaultColumns, decomposition }: Props) => {
	return (
		<StyledDecompositionTable>
			<DecompositionTableHeader columns={columns} />
			<DecompositionTableContent columns={columns} rows={decomposition} />
		</StyledDecompositionTable>
	);
};

export default DecompositionTable;
