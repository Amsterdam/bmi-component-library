import styled, { css } from 'styled-components';
import { themeColor, themeSpacing } from '@amsterdam/asc-ui';

export const ModalActionsCss = css`
	display: flex;
	height: 64px;
	padding: ${themeSpacing(2)} ${themeSpacing(3)};
	border-top: 1px solid ${themeColor('tint', 'level7')};
	background-color: ${themeColor('tint', 'level1')};
	text-align: right;
`;

export const ModalActionsStyle = styled.footer`
	${ModalActionsCss}
	justify-content: flex-end;
`;

export const ModalActionsSplitStyle = styled.footer`
	${ModalActionsCss}
	justify-content: space-between;
`;

export const ModalActionsLeftStyle = styled.div`
	display: flex;
`;

export const ModalActionsRightStyle = styled.div`
	display: flex;
`;
