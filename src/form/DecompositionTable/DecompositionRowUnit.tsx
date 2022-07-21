import React from 'react';
import { Column, UnitRow } from './DecompositionTable';

export type Props = {
	key: string;
	cols: Column[];
	row: UnitRow;
};

const DecompositionRowUnit: React.FunctionComponent<Props> = ({ cols, row }: Props) => {
	return (
		<tr>
			{cols.map((col) => (
				<td key={col.field}>{row?.[col.field as keyof UnitRow] ?? ''}</td>
			))}
		</tr>
	);
};

export default DecompositionRowUnit;
