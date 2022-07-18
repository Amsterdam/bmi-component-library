import React from 'react';
import { TableHeader, TableBody, TableRow, TableCell, Switch, ContextMenuItem } from '@amsterdam/asc-ui';
import { Ellipsis } from '@amsterdam/asc-assets';
import { StyledDecompositionTable, StyledContextMenu } from './DecompositionTableStyles'


export type Props = {
	rows: any[];
};

const DecompositionTable: React.FC<Props> = ({ rows }: Props) => {

	return (
		<StyledDecompositionTable>
			<TableHeader>
				<TableRow>
					<TableCell as="th">Code</TableCell>
					<TableCell as="th">Deel</TableCell>
					<TableCell as="th">Materiaal</TableCell>
					<TableCell as="th">Hoeveelheid</TableCell>
					<TableCell as="th">Eenheid</TableCell>
					<TableCell as="th">Locatie</TableCell>
					<TableCell as="th">Jaar</TableCell>
					<TableCell as="th">Relevant</TableCell>
					<TableCell as="th">Acties</TableCell>
				</TableRow>
			</TableHeader>
			<TableBody>
				{rows.map((row) => (
					<TableRow
						key={row.id}
						className={`row ${row.elementId && !row.unitId ? 'row__unit' : ''} ${row.unitId ? 'row__manifestation' : ''
							} `}
					>
						<TableCell>{row.code}</TableCell>
						<TableCell>{row.name}</TableCell>
						<TableCell>{row.material}</TableCell>
						<TableCell>{row.quantity}</TableCell>
						<TableCell>{row.quantityUnitOfMeasurement}</TableCell>
						<TableCell>{row.location}</TableCell>
						<TableCell>{row.constructionYear}</TableCell>
						<TableCell className="centered">
							{row.isRelevant !== undefined && (
								<Switch aria-label="Relevant" defaultChecked={row.isRelevant} />
							)}
						</TableCell>
						<TableCell>
							<StyledContextMenu arrowIcon={<Ellipsis />}>
								<ContextMenuItem>Bewerk Element</ContextMenuItem>
								<ContextMenuItem>Voeg bouwdeel toe</ContextMenuItem>
								<ContextMenuItem>Genereer maatregelen</ContextMenuItem>
							</StyledContextMenu>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</StyledDecompositionTable>
	);
};

export default DecompositionTable;
