import styled from 'styled-components';
import { DataGrid } from '@material-ui/data-grid';

export default styled(DataGrid)`
	&.MuiDataGrid-root {
		.MuiDataGrid-columnHeaderTitleContainer {
			padding: 0;
		}

		.MuiDataGrid-columnHeaderTitle {
			font-weight: 700;
		}

		.MuiDataGrid-columnSeparator {
			display: none;
		}

		// Disable sorting by hiding buttons for now
		//.MuiDataGrid-iconButtonContainer {
		//	display: none;
		//}
	}
`;
