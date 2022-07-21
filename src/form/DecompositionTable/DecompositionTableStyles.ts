import styled from 'styled-components';
import { ContextMenu, themeColor, themeSpacing } from '@amsterdam/asc-ui';

export const StyledDecompositionTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	color: ${themeColor('tint', 'level6')};

	.row {
		background-color: rgba(0, 70, 153, 0.2);

		&__unit {
			background-color: ${themeColor('tint', 'level3')};
		}

		&__manifestation {
			background-color: ${themeColor('tint', 'level1')};
		}
	}

	.centered {
		text-align: center;
	}

	input[role='switch']:checked + span {
		background-color: ${themeColor('primary')};
		border-color: ${themeColor('primary')};
	}

	button {
		border: none;
		background-color: transparent;
		color: ${themeColor('primary')};
	}

	button svg {
		fill: ${themeColor('primary')};
	}
`;

export const StyledContextMenu = styled(ContextMenu)`
	position: relative;
	width: 30px;

	div[role='menu'] {
		right: 0;
		z-index: 999999;
	}
`;

export const StyledTableHeader = styled.thead`
	width: 100%;
	background-color: ${themeColor('tint', 'level7')};
	color: ${themeColor('tint', 'level1')};

	th {
		margin: 0;
		padding: ${themeSpacing(2)};
		position: relative;
		text-align: left;
	}
`;

export const StyledTableContent = styled.tbody`
	width: 100%;
`;

export const StyledTableRow = styled.tr`
	width: 100%;
`;
