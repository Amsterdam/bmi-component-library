import React from 'react';
import { Column, ManifestationRow } from './DecompositionTable';

export type Props = {
	key: string;
	cols: Column[];
	row: ManifestationRow;
};

const DecompositionRowManifestation: React.FunctionComponent<Props> = ({ cols, row }: Props) => {
	return (
		<tr>
			{cols.map((col) => (
				<td key={col.field}>{row?.[col.field as keyof ManifestationRow] ?? ''}</td>
			))}
		</tr>
	);
};

export default DecompositionRowManifestation;
