import React from 'react';
import { ContextMenuItem, Switch } from '@amsterdam/asc-ui';
import { Column, ElementRow } from './DecompositionTable';
import { StyledContextMenu, StyledDecompositionRowElement } from './DecompositionTableStyles';
import { Ellipsis } from '@amsterdam/asc-assets';

export type Props = {
	key: string;
	cols: Column[];
	row: ElementRow;
};

const DecompositionRowElement: React.FunctionComponent<Props> = ({ cols, row }: Props) => {
	return (
		<StyledDecompositionRowElement>
			{cols.map(col => {
				if (col.field === 'isRelevant') {
					return <td key={col.field} className="centered">
						<Switch />
					</td>
				} else if (col.field === 'actions') {
					return <td key={col.field}>
						<StyledContextMenu arrowIcon={<Ellipsis />}>
							<ContextMenuItem>Bewerk element</ContextMenuItem>
							<ContextMenuItem>Voeg bouwdeel toe</ContextMenuItem>
							<ContextMenuItem>Genereer maatregelen</ContextMenuItem>
						</StyledContextMenu>
					</td>
				} else {
					return <td key={col.field}>
						{row?.[col.field as keyof ElementRow] ?? ''}
					</td>
				}
			})}
		</StyledDecompositionRowElement>
	);
};

export default DecompositionRowElement;
