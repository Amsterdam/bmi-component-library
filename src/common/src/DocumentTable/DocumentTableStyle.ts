import styled from 'styled-components';
import { DataGrid } from '@material-ui/data-grid';
import { themeColor, srOnlyStyle } from '@amsterdam/asc-ui';

export default styled(DataGrid)`
	&.MuiDataGrid-root {
		border: none;

		.MuiDataGrid-columnHeaderTitleContainer {
			padding: 0;
		}

		.MuiDataGrid-columnHeaderTitle {
			font-weight: 700;
		}

		.MuiDataGrid-columnSeparator {
			display: none;
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
			line-height: 42px;
		}

		.sr-only {
			${srOnlyStyle}
		}
	}
`;
