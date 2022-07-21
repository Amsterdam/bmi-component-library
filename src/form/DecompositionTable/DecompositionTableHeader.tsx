import React from 'react';
import { StyledTableHeader } from './DecompositionTableStyles';

export type Props = {
	columns?: any[];
}

const DecompositionTableHeader: React.FunctionComponent<Props> = ({
	columns
}: Props) => {
	return (
		<StyledTableHeader>
			{columns?.map((column) => (
				<th key={column.field}>{column.headerName}</th>
			))}
		</StyledTableHeader>
	)
};

export default DecompositionTableHeader;