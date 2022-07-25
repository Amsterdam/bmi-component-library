import styled from 'styled-components';
import { themeColor, themeSpacing } from '@amsterdam/asc-ui';
import { INPUT_SIZE } from '../../shared/constants';

// @todo style [required] when design is available

export const InputStyle = styled.input`
	appearance: none;
	color: ${themeColor('tint', 'level6')};
	font-size: 24px;
	font-weight: 400;
	border-color: ${themeColor('tint', 'level6')};
	border-width: 1px;
	border-style: solid;
	border-radius: 0;
	box-sizing: border-box;
	line-height: ${INPUT_SIZE}px;
	padding: ${themeSpacing(1, 3)};
	height: ${INPUT_SIZE}px;
	margin: 0;

	&::placeholder {
		color: ${themeColor('tint', 'level4')};
	}

	&:focus {
		outline: none;
		border-width: 2px;
	}

	&:not([disabled]):hover {
		border-color: ${themeColor('tint', 'level6')};
		border-width: 2px;
	}

	&:not([disabled])[aria-invalid] {
		border-color: ${themeColor('support', 'invalid')};
	}

	&[disabled] {
		border-color: ${themeColor('tint', 'level4')};
		color: ${themeColor('tint', 'level4')};

		&::placeholder {
			color: ${themeColor('tint', 'level4')};
		}
	}
`;
