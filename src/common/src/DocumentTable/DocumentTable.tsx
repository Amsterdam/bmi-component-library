import React, { useEffect } from 'react';
import { GridCellParams, GridColDef, GridRowData } from '@material-ui/data-grid';
import DocumentTableStyle from './DocumentTableStyle';
import { Pagination } from '@amsterdam/asc-ui';
import ColumnFilter from './ColumnFilter';

type Props = {
	columns?: GridColDef[];
	rows: GridRowData[];
	disableFilterRow?: boolean;
	page?: number;
};

const defaultColumns: GridColDef[] = [
	{
		field: 'filename',
		headerName: 'Bestandsnaam',
		renderCell: (params: GridCellParams) => {
			return (
				<a href="#" target="_blank">
					{params.value}
				</a>
			);
		},
		width: 180,
		sortable: false,
	},
	{
		field: 'documentDescription',
		headerName: 'Documentomschrijving',
		width: 240,
		sortable: false,
	},
	{
		field: 'documentType',
		headerName: 'Documenttype',
		width: 200,
		sortable: false,
	},
	{
		field: 'year',
		headerName: 'Jaar',
		width: 200,
		sortable: false,
	},
];

function paginate(rows: GridRowData[], pageSize: number, currentPage: number): GridRowData[] {
	return rows.slice((currentPage - 1) * pageSize, currentPage * pageSize);
}

function applyFilters(rows: GridRowData[], filters: { [key: string]: string }): GridRowData[] {
	return rows.filter((row) => {
		let include = true;
		Object.keys(filters).some((filterKey) => {
			if (
				filters?.[filterKey].length &&
				!String(row[filterKey]).toLowerCase().includes(String(filters[filterKey].toLowerCase()))
			) {
				include = false;
				return true;
			}
			return false;
		});
		return include;
	});
}

const DocumentTable: React.FC<Props> = ({ columns = defaultColumns, rows, disableFilterRow, page = 1 }: Props) => {
	const [tableColumns, setTableColumns] = React.useState<GridColDef[]>(columns);
	const [tableRows, setTableRows] = React.useState<GridRowData[]>(rows);
	const [currentPage, setCurrentPage] = React.useState<number>(page);
	const [filters, setFilter] = React.useState<{ [key: string]: string }>({});
	const [filteredRows, setFilteredRows] = React.useState<GridRowData[]>(rows);

	const handleOnKeyUp = React.useCallback((evt: React.KeyboardEvent<HTMLInputElement>) => {
		const input = evt.target as HTMLInputElement;
		const { name, value } = input;
		setFilter({ ...filters, [name]: value });
	}, []);

	const handleClearFilter = React.useCallback((key: string) => {
		delete filters[key];
		setFilter({ ...filters });
	}, []);

	useEffect(() => {
		if (disableFilterRow === true) {
			setTableColumns(columns);
			setTableRows(rows);
		} else {
			// Inject additional row for filter inputs
			const filter: GridRowData = {
				id: 0,
			};
			const rowsWithFilter = [filter, ...paginate(filteredRows, 2, currentPage)];
			setTableColumns(
				columns.map((col: GridColDef) => ({
					...col,
					renderCell: (params: GridCellParams) => {
						if (params.id === 0)
							return (
								<ColumnFilter params={params} onKeyUp={handleOnKeyUp} onClear={() => handleClearFilter(params.field)} />
							);
						if (col.renderCell !== undefined) return col.renderCell(params);
						return <>{params.formattedValue}</>;
					},
				})),
			);
			setTableRows(rowsWithFilter);
		}
	}, [disableFilterRow, currentPage, filteredRows]);

	useEffect(() => {
		setFilteredRows(applyFilters(rows, filters));
		setCurrentPage(1);
	}, [filters]);

	return (
		<>
			<DocumentTableStyle
				columns={tableColumns}
				rows={tableRows}
				disableColumnFilter
				disableColumnMenu
				autoHeight
				hideFooterPagination
				disableSelectionOnClick
				disableColumnReorder
				rowHeight={42}
				headerHeight={42}
				// page={currentPage}
				// pageSize={1}
			/>
			<Pagination collectionSize={rows.length} pageSize={2} page={currentPage} onPageChange={setCurrentPage} />
		</>
	);
};

DocumentTable.displayName = 'DocumentTable';

export default DocumentTable;
