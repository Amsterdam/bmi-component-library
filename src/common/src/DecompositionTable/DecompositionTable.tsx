import React from 'react';
import { TableContainer,
	TableHeader,
	TableBody,
	TableRow,
	TableCell,
	Switch,
	ContextMenu,
	ContextMenuItem } from '@amsterdam/asc-ui';
import { Ellipsis } from '@amsterdam/asc-assets';
import { StyledDecompositionTable } from './DecompositionTableStyles';

export type Props = {
	rows: any[];
	columns: any[];
}

const DecompositionTable: React.FC<Props> = ({
	columns,
	rows,
}: Props) => {
	return (
		<TableContainer>
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
						<TableRow key={row.id}>
							<TableCell>{row.code}</TableCell>
							<TableCell>{row.name}</TableCell>
							<TableCell>{row.material}</TableCell>
							<TableCell>{row.quantity}</TableCell>
							<TableCell>{row.quantityUnitOfMeasurement}</TableCell>
							<TableCell>{row.location}</TableCell>
							<TableCell>{row.constructionYear}</TableCell>
							<TableCell>
								<Switch aria-label='Relevant' defaultChecked={row.isRelevant} />
							</TableCell>
							<TableCell>
								<ContextMenu arrowIcon={<Ellipsis />}>
									<ContextMenuItem>Bewerk Element</ContextMenuItem>
									<ContextMenuItem>Voeg bouwdeel toe</ContextMenuItem>
									<ContextMenuItem>Genereer maatregelen</ContextMenuItem>
								</ContextMenu>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</StyledDecompositionTable>
		</TableContainer>
	);
}


export default DecompositionTable;