import React from 'react';
import { Column, ElementRow } from './DecompositionTable';

export type Props = {
	key: string;
	cols: Column[];
	row: ElementRow;
};

const DecompositionRowElement: React.FunctionComponent<Props> = ({ cols, row }: Props) => {
	return (
		<tr>
			{cols.map((col) => (
				<td key={col.field}>{row?.[col.field as keyof ElementRow] ?? ''}</td>
			))}
		</tr>
	);
};

export default DecompositionRowElement;
