import styled from 'styled-components';
import { themeColor, TopBar, themeSpacing, breakpoint } from '@amsterdam/asc-ui';

const ModalTopBarStyle = styled(TopBar)`
	height: 64px;
	border-bottom: 2px solid ${themeColor('tint', 'level6')};
	padding: 0 ${themeSpacing(2)} 0 ${themeSpacing(3)};

	@media screen and ${breakpoint('min-width', 'tabletM')} {
		padding: 0 ${themeSpacing(2)} 0 ${themeSpacing(7)};
	}
`;

export default ModalTopBarStyle;
