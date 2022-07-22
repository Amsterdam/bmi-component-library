import { Ellipsis } from '@amsterdam/asc-assets';
import { ContextMenuItem } from '@amsterdam/asc-ui';
import React from 'react';
import { Column, ManifestationRow } from './DecompositionTable';
import { StyledContextMenu, StyledDecompositionRowManifestation } from './DecompositionTableStyles';

export type Props = {
	key: string;
	cols: Column[];
	row: ManifestationRow;
};

const DecompositionRowManifestation: React.FunctionComponent<Props> = ({ cols, row }: Props) => {
	return (
		<StyledDecompositionRowManifestation className='manifestation'>
			{cols.map(col => {
				if (col.field === 'actions') {
					return <td key={col.field}>
						<StyledContextMenu arrowIcon={<Ellipsis />}>
							<ContextMenuItem>Bewerk verschijningsvorm</ContextMenuItem>
							<ContextMenuItem>Verwijder verschijningsvorm</ContextMenuItem>
						</StyledContextMenu>
					</td>
				} else {
					return <td key={col.field}>
						{row?.[col.field as keyof ManifestationRow] ?? ''}
					</td>
				}
			})}
		</StyledDecompositionRowManifestation>
	);
};

export default DecompositionRowManifestation;
