import React, { useEffect } from 'react';
import { GridCellParams, GridCellValue, GridColDef, GridRowData } from '@material-ui/data-grid';
import DocumentTableStyle from './DocumentTableStyle';
import { Button, Pagination } from '@amsterdam/asc-ui';
import ColumnFilter from './ColumnFilter';
import { Close } from '@amsterdam/asc-assets';

type Props = {
	// Material UI DataGrid columns definitions
	columns?: GridColDef[];
	// Material UI DataGrid row definitions
	rows: GridRowData[];
	// Current state of pagination
	page?: number;
	// Page size; defaults to 10
	pageSize?: number;
	// If true, no filter row is rendered
	disableFilterRow?: boolean;
	// If true, no removal links are rendered
	disableRemoval?: boolean;
	// In case disableRemoval is not set to true
	onRemove?: (id: GridCellValue) => void;
	// In of the default columns being used
	onDownload?: (row: GridRowData) => void;
};

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

const DocumentTable: React.FC<Props> = ({
	columns,
	rows,
	disableFilterRow = false,
	disableRemoval = false,
	page = 1,
	pageSize = 10,
	onRemove,
	onDownload,
}: Props) => {
	const [tableColumns, setTableColumns] = React.useState<GridColDef[]>(
		columns !== undefined
			? columns
			: [
					{
						field: 'filename',
						headerName: 'Bestandsnaam',
						renderCell: function renderCell(params: GridCellParams) {
							return onDownload ? (
								<a href="#" onClick={() => onDownload(params.row)} data-testid={`document-table-download-${params.id}`}>
									<span className="sr-only">Download</span>
									{params.value}
								</a>
							) : (
								<>{params.value}</>
							);
						},
						flex: 2,
						sortable: false,
					},
					{
						field: 'documentDescription',
						headerName: 'Documentomschrijving',
						flex: 1.5,
						sortable: false,
					},
					{
						field: 'documentType',
						headerName: 'Documenttype',
						flex: 1,
						sortable: false,
					},
					{
						field: 'year',
						headerName: 'Jaar',
						flex: 1,
						sortable: false,
					},
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  ],
	);
	const [tableRows, setTableRows] = React.useState<GridRowData[]>(rows);
	const [currentPage, setCurrentPage] = React.useState<number>(page);
	const [filters, setFilters] = React.useState<{ [key: string]: string }>({});
	const [filteredRows, setFilteredRows] = React.useState<GridRowData[]>(rows);

	const handleOnKeyUp = React.useCallback((evt: React.KeyboardEvent<HTMLInputElement>) => {
		const input = evt.target as HTMLInputElement;
		const { name, value } = input;
		setFilters({ ...filters, [name]: value });
	}, []);

	const handleClearFilter = React.useCallback((key: string) => {
		delete filters[key];
		setFilters({ ...filters });
	}, []);

	const handleRemoval = React.useCallback((id: GridCellValue) => onRemove && onRemove(id), []);

	useEffect(() => {
		if (disableFilterRow === true) {
			setTableRows(rows);
		} else {
			// Inject additional row for filter inputs
			const filter: GridRowData = {
				id: 0,
			};
			const rowsWithFilter = [filter, ...paginate(filteredRows, pageSize, currentPage)];
			setTableColumns(
				tableColumns.map((col: GridColDef) => ({
					...col,
					renderCell: function renderCell(params: GridCellParams) {
						if (params.id === 0 && params.field === 'id') return <></>;
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

	useEffect(() => {
		if (!disableRemoval) {
			tableColumns.push({
				field: 'id',
				headerName: ' ',
				sortable: false,
				cellClassName: 'remove',
				renderCell: function renderCell(params: GridCellParams) {
					return (
						<Button
							variant="textButton"
							iconSize={14}
							iconLeft={<Close />}
							onClick={() => handleRemoval(params.value)}
							data-testid={`document-table-remove-${params.id}`}
						>
							Wissen
						</Button>
					);
				},
			});
			setTableColumns(tableColumns);
		}
	}, []);

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
				columnBuffer={tableColumns.length}
			/>
			<Pagination collectionSize={rows.length} pageSize={pageSize} page={currentPage} onPageChange={setCurrentPage} />
		</>
	);
};

DocumentTable.displayName = 'DocumentTable';

export default DocumentTable;
