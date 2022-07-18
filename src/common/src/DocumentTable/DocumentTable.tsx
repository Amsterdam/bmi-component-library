import React, { useEffect, useMemo } from 'react';
import { GridColDef, GridRowModel } from '@mui/x-data-grid';
import { Button } from '@amsterdam/asc-ui';
import { Close } from '@amsterdam/asc-assets';
import Skeleton from 'react-loading-skeleton';
import { StyledPagination, StyledDataGrid } from './DocumentTableStyle';
import ColumnFilter from './ColumnFilter';

import 'react-loading-skeleton/dist/skeleton.css';

export type Props = {
	// Material UI DataGrid columns definitions
	columns?: GridColDef[];
	// Material UI DataGrid row definitions
	rows: GridRowModel[];
	// Current state of pagination
	page?: number;
	// Page size; defaults to 10
	pageSize?: number;
	// If true, no filter row is rendered
	disableFilterRow?: boolean;
	// If true, no removal links are rendered
	disableRemoval?: boolean;
	// In case disableRemoval is not set to true
	onRemove?: (id: string) => Promise<boolean | void>;
	// In of the default columns being used
	onDownload?: (row: GridRowModel) => void;
	// Renders table as skeleton
	loading?: boolean;
};

type Filters = Record<string, string>;

export function paginate(rows: GridRowModel[], pageSize: number, currentPage: number): GridRowModel[] {
	return rows.slice((currentPage - 1) * pageSize, currentPage * pageSize);
}

export function applyFilters(rows: GridRowModel[], filters: Filters): GridRowModel[] {
	return Object.keys(filters).length === 0
		? rows
		: rows.filter((row) => {
			let include = true;
			// Only include if all of the applied filters have a positive match on each respective column
			// iterate over each applied filter,
			// if any of the applied filters don't have a match on this row => exclude
			Object.keys(filters).some((filterKey) => {
				if (
					filters?.[ filterKey ].length &&
					!String(row[ filterKey ]).toLowerCase().includes(String(filters[ filterKey ]).toLowerCase())
				) {
					// Filter string not found in column value
					include = false;
					return true;
				}
				return false;
			});
			return include;
			// eslint-disable-next-line no-mixed-spaces-and-tabs
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
	loading = false,
}: Props) => {
	const tableColumns = useMemo(() => {
		let cols = columns ?? [
			{
				field: 'filename',
				headerName: 'Bestandsnaam',
				renderCell: function renderCell(params) {
					if (loading) return <Skeleton />;
					// The onDragStart hack prevents being able to reorder the columns by dragging (BUG)
					return onDownload ? (
						<a
							href="#"
							onClick={(evt) => {
								evt.stopPropagation();
								evt.preventDefault();
								onDownload(params.row);
							}}
							onDragStart={(evt) => evt.preventDefault()}
							data-testid={`document-table-download-${params.id}`}
						>
							<span className="sr-only">Download</span>
							{params.value}
						</a>
					) : (
						<>{params.value}</>
					);
				},
				flex: 1.5,
				sortable: false,
				resizable: false,
			},
			{
				field: 'documentDescription',
				headerName: 'Documentomschrijving',
				flex: 1.5,
				sortable: false,
				resizable: false,
			},
			{
				field: 'documentType',
				headerName: 'Documenttype',
				flex: 1.5,
				sortable: false,
				resizable: false,
			},
			{
				field: 'year',
				headerName: 'Jaar',
				flex: 0.5,
				sortable: false,
				resizable: false,
			},
		];

		if (!disableFilterRow) {
			cols = cols.map(
				(col) =>
				({
					...col,
					renderCell: function renderCell(params) {
						if (loading) return <Skeleton />;
						if (params.id === 0 && params.field === 'id') return <></>;
						if (params.id === 0)
							return (
								<ColumnFilter
									params={params}
									onFilter={(value) => {
										onFilterChange(params.field, value);
									}}
									onClear={() => onClearFilter(params.field)}
								/>
							);
						if (col.renderCell !== undefined) return col.renderCell(params);
						return <>{params.formattedValue}</>;
					},
				} as GridColDef),
			);
		} else {
			cols = cols.map(
				(col) =>
				({
					...col,
					renderCell: function renderCell(params) {
						if (loading) return <Skeleton />;
						if (col.renderCell !== undefined) return col.renderCell(params);
						return <>{params.formattedValue}</>;
					},
				} as GridColDef),
			);
		}

		if (!disableRemoval) {
			cols.push({
				field: 'id',
				headerName: ' ',
				sortable: false,
				cellClassName: 'remove',
				renderCell: function renderCell(params) {
					if (loading) return <Skeleton />;
					if (params.id === 0 && params.field === 'id') return <></>;
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
		}

		return cols;
	}, [ columns, disableFilterRow, disableRemoval, loading ]);

	// Filtered rows contains all rows that were not deleted or filtered out (required for pagination)
	const [ filteredRows, setFilteredRows ] = React.useState<GridRowModel[]>(rows);
	// Paginated subset of filtered rows
	const [ tableRows, setTableRows ] = React.useState<GridRowModel[]>(rows);
	const [ currentPage, setCurrentPage ] = React.useState<number>(page);
	const [ filters, setFilters ] = React.useState<Filters>({});
	const [ deletedRowIds, setDeletedRowIds ] = React.useState<string[]>([]);

	const onFilterChange = React.useCallback((name: string, value: string) => {
		setFilters((prevState) => ({ ...prevState, [ name ]: value }));
	}, []);

	const onClearFilter = React.useCallback((key: string) => {
		delete filters[ key ];
		setFilters({ ...filters });
	}, []);

	const handleRemoval = React.useCallback(async (id: string) => {
		if (onRemove) {
			const removed = await onRemove(id);
			// Expect explicit false in case a confirmation dialog is used and cancelled
			if (removed !== false) setDeletedRowIds([ ...deletedRowIds, id ]);
		}
	}, []);

	const skeletonRows = useMemo(() => {
		const skeletonRow = tableColumns.reduce((acc, col, idx) => {
			acc[ col.field ] = '';
			return acc;
		}, {} as GridRowModel);

		return [ ...new Array(pageSize + (disableFilterRow ? 0 : 1)) ].map((n, idx) => ({ ...skeletonRow, id: idx + 2 }));
	}, [ tableColumns ]);

	/**
	 * Update rows in case
	 * - currentPage changed
	 * - filter was adjusted
	 * - rows prop changed
	 * - item was removed
	 */
	useEffect(() => {
		const filteredRows: GridRowModel[] = (disableFilterRow ? rows : applyFilters(rows, filters))
			// Once filters have been applied, filter out deleted rows
			.filter((row) => !deletedRowIds.includes(row.id));
		setFilteredRows(filteredRows);

		setTableRows([
			...(disableFilterRow
				? []
				: [
					{
						id: 0,
					},
					// eslint-disable-next-line no-mixed-spaces-and-tabs
				]),
			...paginate(filteredRows, pageSize, currentPage),
		]);

		// TODO check if there are records on the currentPage, if not, go to the previous page?
	}, [ currentPage, filters, rows, deletedRowIds ]);

	// Jump back to page 1 on filter change
	useEffect(() => setCurrentPage(1), [ filters ]);

	// Clear deleted rows cache if rows are updated from props
	useEffect(() => setDeletedRowIds([]), [ rows ]);

	return (
		<>
			<StyledDataGrid
				columns={tableColumns}
				rows={loading ? skeletonRows : tableRows}
				disableColumnFilter
				disableColumnMenu
				autoHeight
				hideFooter
				hideFooterPagination
				disableSelectionOnClick
				rowHeight={42}
				headerHeight={42}
				columnBuffer={tableColumns.length}
				getRowHeight={() => 'auto'}
			/>
			{!loading && (
				<StyledPagination
					collectionSize={filteredRows.length}
					pageSize={pageSize}
					page={currentPage}
					onPageChange={setCurrentPage}
				/>
			)}
		</>
	);
};

export default DocumentTable;
