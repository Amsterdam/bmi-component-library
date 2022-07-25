import styled, { css } from 'styled-components';
import { Divider, themeSpacing } from '@amsterdam/asc-ui';

export const ModalActionsCss = css<{ hideDivider: boolean }>`
	display: grid;
	grid-template-rows: ${themeSpacing(6)} auto;

	padding: 0;
	text-align: right;

	${Divider} {
		grid-column: 1 / span 2;
		grid-row: 1;
		background-color: ${({ hideDivider }) => (hideDivider ? 'transparent' : '#000')};
	}
`;

export const ModalActionsStyle = styled.footer`
	${ModalActionsCss}
	grid-template-columns: 1fr;
`;

export const ModalActionsSplitStyle = styled.footer`
	${ModalActionsCss}
	grid-template-columns: 1fr 1fr;
`;

export const ModalActionsLeftStyle = styled.div`
	display: flex;
	grid-column: 1;
`;

export const ModalActionsRightStyle = styled.div`
	display: flex;
	grid-column: 2;
	justify-content: end;
`;
