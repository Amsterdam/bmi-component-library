import styled from 'styled-components'
import { Table, themeColor } from '@amsterdam/asc-ui'

export const StyledDecompositionTable = styled(Table)`
	width: 100%;
	border-collapse: collapse;
	color: ${themeColor('tint', 'level6')};

	thead {
		background-color: ${themeColor('tint', 'level7')};
		color: ${themeColor('tint', 'level1')};
	}
`;