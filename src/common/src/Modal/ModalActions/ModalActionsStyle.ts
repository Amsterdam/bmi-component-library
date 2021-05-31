import styled from 'styled-components';
import { themeColor, themeSpacing } from '@amsterdam/asc-ui';

const ModalActionsStyle = styled.footer`
	position: sticky;
	bottom: 0;
	padding: ${themeSpacing(2)} ${themeSpacing(3)};
	border-top: 1px solid ${themeColor('tint', 'level7')};
	text-align: right;
	background-color: ${themeColor('tint', 'level1')};
`;

export default ModalActionsStyle;
