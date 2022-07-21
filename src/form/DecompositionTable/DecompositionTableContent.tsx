import React from 'react';
import { StyledTableContent } from './DecompositionTableStyles';
import DecompositionElement from './DecompositionRowElement';
import { Column, DecompositionRow, ElementRow } from './DecompositionTable';
import DecompositionRowUnit from './DecompositionRowUnit';
import { isUnitRow, isManifestationRow } from './type-guards/';
import DecompositionRowManifestation from './DecompositionRowManifestation';

export type Props = {
	columns: Column[];
	rows: DecompositionRow[];
};

const DecompositionTableContent: React.FunctionComponent<Props> = ({ columns, rows }: Props) => {
	return (
		<StyledTableContent>
			{rows.map((row) => {
				if (isUnitRow(row)) {
					return <DecompositionRowUnit key={row.id} cols={columns} row={row} />;
				}
				if (isManifestationRow(row)) {
					return <DecompositionRowManifestation key={row.id} cols={columns} row={row} />;
				}
				return <DecompositionElement key={row.id} cols={columns} row={row as ElementRow} />;
			})}
		</StyledTableContent>
	);
};

export default DecompositionTableContent;
