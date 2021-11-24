import React, { ComponentProps } from 'react';
import styled from 'styled-components';
import { DataGrid } from '@material-ui/data-grid';
import { themeColor, srOnlyStyle, Pagination } from '@amsterdam/asc-ui';

export const PaginationStyle = styled(Pagination)`
	&& {
		padding-top: 10px;
		margin-top: 42px;
	}
`;

const StyledDataGrid: React.FC<ComponentProps<typeof DataGrid>> = styled(DataGrid)`
	&.MuiDataGrid-root {
		border: none;

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

		/**
		 * Disable fixed row height while feature is missing. See:
		 * https://github.com/mui-org/material-ui-x/issues/1040
		 * https://github.com/mui-org/material-ui-x/issues/417
		 */
		.MuiDataGrid-windowContainer {
			height: auto !important;
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

		.MuiDataGrid-row {
			&.Mui-odd,
			&.Mui-odd:hover {
				background-color: ${themeColor('tint', 'level2')};
			}

			&.Mui-even,
			&.Mui-even:hover {
				background-color: ${themeColor('tint', 'level1')};
			}
		}

		.MuiDataGrid-cell.remove button {
			line-height: 22px;
		}

		.sr-only {
			${srOnlyStyle}
		}
	}
`;

export default StyledDataGrid;
