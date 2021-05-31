import styled from 'styled-components';
import { themeColor, TopBar, themeSpacing, breakpoint } from '@amsterdam/asc-ui';

const ModalTopBarStyle = styled(TopBar)`
	border-bottom: 1px solid ${themeColor('tint', 'level7')};
	padding: 0 ${themeSpacing(2)} 0 ${themeSpacing(3)};

	@media screen and ${breakpoint('min-width', 'tabletM')} {
		padding: 0 ${themeSpacing(2)} 0 ${themeSpacing(7)};
	}
`;

export default ModalTopBarStyle;
