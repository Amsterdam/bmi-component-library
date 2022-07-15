import styled from 'styled-components';
import { DataGrid, DataGridProps } from '@mui/x-data-grid';
import { themeColor, srOnlyStyle, Pagination, themeSpacing } from '@amsterdam/asc-ui';
import { ComponentProps } from 'react';

export const StyledPagination = styled(Pagination) <ComponentProps<typeof Pagination>>`
	&& {
		padding-top: ${themeSpacing(1)};
	}
`;

export const StyledDataGrid = styled(DataGrid) <DataGridProps>`
	&.MuiDataGrid-root {
		border: none;
		margin-bottom: ${themeSpacing(12)};

		.MuiDataGrid-columnHeader {
			padding: 10px 15px;
			line-height: 22px !important;
		}

		.MuiDataGrid-columnHeaderTitleContainer {
			padding: 0;
		}

		.MuiDataGrid-columnHeaderTitle {
			font-weight: 700;
		}

		.MuiDataGrid-columnSeparator {
			display: none;
		}

		.MuiDataGrid-row,
		.MuiDataGrid-cell,
		.MuiDataGrid-renderingZone,
		.MuiDataGrid-viewport {
			max-height: none !important;
		}

		.MuiDataGrid-window {
			position: relative !important;
		}

		.MuiDataGrid-cell {
			border-bottom: none;
			white-space: normal;
			vertical-align: top;

			a {
				color: ${themeColor('primary', 'main')};

				&:visited {
					color: ${themeColor('supplement', 'purple')};
				}

				&:hover {
					color: ${themeColor('secondary', 'main')};
				}
			}

			> span[aria-live] {
				width: 100%;
			}
		}

		.MuiDataGrid-cell,
		.MuiDataGrid-cell--withRenderer {
			align-items: flex-start;
			line-height: 22px !important;
			padding: 10px 15px;
		}

		.MuiDataGrid-columnHeader:focus-within,
		.MuiDataGrid-cell:focus-within,
		.MuiDataGrid-columnHeader:focus,
		.MuiDataGrid-cell:focus {
			outline: none;
		}

		/* stylelint-disable no-descending-specificity */
		.MuiDataGrid-row {
			&:nth-child(odd),
			&:nth-child(odd):hover {
				background-color: ${themeColor('tint', 'level1')};
			}

			&:nth-child(even),
			&:nth-child(even):hover {
				background-color: ${themeColor('tint', 'level2')};
			}
		}
		/* stylelint-enable no-descending-specificity */

		.MuiDataGrid-cell.remove button {
			line-height: 22px;
		}

		.sr-only {
			${srOnlyStyle}
		}
	}
`;
