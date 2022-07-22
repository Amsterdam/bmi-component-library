import styled from 'styled-components';
import { themeSpacing } from '@amsterdam/asc-ui';
import { INPUT_SIZE, INPUT_ERROR_MESSAGE_SIZE } from '../../shared/constants';

export const FormInputErrorMessageStyle = styled.span`
	font-size: 18px;
	line-height: ${INPUT_ERROR_MESSAGE_SIZE}px;
	font-weight: 400;
	letter-spacing: 0.2px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;

export const FormInputStyle = styled.div`
	display: grid;
	grid-template-rows: ${INPUT_SIZE}px ${INPUT_ERROR_MESSAGE_SIZE}px;
	grid-gap: ${themeSpacing(1)};
`;
