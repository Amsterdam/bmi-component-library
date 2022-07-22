import React from 'react';
import { ContextMenuItem, Switch } from '@amsterdam/asc-ui';
import { Column, UnitRow } from './DecompositionTable';
import { StyledContextMenu, StyledDecompositionRowUnit } from './DecompositionTableStyles';
import { Ellipsis } from '@amsterdam/asc-assets';

export type Props = {
	key: string;
	cols: Column[];
	row: UnitRow;
};

const DecompositionRowUnit: React.FunctionComponent<Props> = ({ cols, row }: Props) => {
	return (
		<StyledDecompositionRowUnit>
			{cols.map(col => {
				if (col.field === 'isRelevant') {
					return <td key={col.field} className="centered">
						<Switch />
					</td>
				} else if (col.field === 'actions') {
					return <td key={col.field}>
						<StyledContextMenu arrowIcon={<Ellipsis />}>
							<ContextMenuItem>Bewerk bouwdeel</ContextMenuItem>
							<ContextMenuItem>Voeg verschijningsvorm toe</ContextMenuItem>
							<ContextMenuItem>Genereer maatregelen</ContextMenuItem>
							<ContextMenuItem>Verwijder bouwdeel</ContextMenuItem>
						</StyledContextMenu>
					</td>
				} else {
					return <td key={col.field}>
						{row?.[col.field as keyof UnitRow] ?? ''}
					</td>
				}
			})}
		</StyledDecompositionRowUnit>
	);
};

export default DecompositionRowUnit;
