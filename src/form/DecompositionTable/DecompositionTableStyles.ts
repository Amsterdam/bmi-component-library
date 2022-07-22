import styled from 'styled-components';
import { ContextMenu, themeColor, themeSpacing } from '@amsterdam/asc-ui';

export const StyledDecompositionTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	color: ${themeColor('tint', 'level6')};

	td.centered {
		text-align: center;
	}

	input[role='switch'] + span {
		border-width: 2px;
		background-color: ${themeColor('tint', 'level4')};
		border-color: ${themeColor('tint', 'level4')};
	}

	input[role='switch'] + span ~ span {
		border: 2px solid ${themeColor('tint', 'level1')};
		box-shadow: none;
	}

	input[role='switch']:focus + span {
		border-color: ${themeColor('tint', 'level5')};
		background-color: ${themeColor('tint', 'level5')};
	}

	input[role='switch']:checked + span,
	input[role='switch']:checked:focus + span {
		background-color: ${themeColor('primary')};
		border-color: ${themeColor('primary')};
	}

	button svg {
		fill: ${themeColor('primary')};
	}
`;

export const StyledContextMenu = styled(ContextMenu)`
	position: relative;

	button {
		background-color: transparent;
		border: 3px solid transparent;

		&:hover,
		&:focus,
		&:active {
			outline: none;
			border-color: ${themeColor('primary')};
		}
	}

	div[role='menu'] {
		border: 3px solid ${themeColor('primary')};
		right: 0;
		z-index: 999999;
		transform: translateY(-3px);
	}

	li button:hover,
	li button:focus {
		background-color: ${themeColor('primary')};
		color: ${themeColor('tint', 'level1')};
	}
`;

export const StyledTableHeader = styled.thead`
	width: 100%;
	background-color: ${themeColor('tint', 'level7')};
	color: ${themeColor('tint', 'level1')};

	th {
		margin: 0;
		padding: ${themeSpacing(3)};
		position: relative;
		text-align: left;
	}
`;

export const StyledTableContent = styled.tbody`
	width: 100%;

	td {
		margin: 0;
		padding: ${themeSpacing(3)};
		position: relative;
		text-align: left;
	}
`;

export const StyledDecompositionRowElement = styled.tr`
	width: 100%;
	background-color: rgba(0, 70, 153, 0.2);
`;

export const StyledDecompositionRowUnit = styled.tr`
	width: 100%;
	background-color: ${themeColor('tint', 'level3')};
`;

export const StyledDecompositionRowManifestation = styled.tr`
	width: 100%;
	background-color: ${themeColor('tint', 'level1')};

	~ .manifestation {
		border-top: 1px solid ${themeColor('tint', 'level4')};
	}
}
`;
