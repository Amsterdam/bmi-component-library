import styled, { css } from 'styled-components';
import { themeColor, themeSpacing } from '@amsterdam/asc-ui';

export const ModalActionsCss = css`
	display: flex;
	padding: ${themeSpacing(4)} ${themeSpacing(4)};
	border-top: 2px solid ${themeColor('tint', 'level6')};
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
