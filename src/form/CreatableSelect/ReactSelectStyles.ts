import { StylesConfig } from 'react-select';
import styled from 'styled-components';
import { ComponentProps } from 'react';
import { Label } from '@amsterdam/asc-ui';

export const StyledLabel = styled(Label)<ComponentProps<typeof Label>>`
	font-weight: 700;
`;

// @see https://designsystem.amsterdam.nl/7awj1hc9f/p/6561a5-selection-dropdown
// @see https://react-select.com/styles
// @see https://github.com/Amsterdam/amsterdam-styled-components/blob/main/packages/asc-ui/src/components/Select/SelectStyle.ts
const reactSelectStyles: StylesConfig = {
	control: (styles, { isFocused }) => ({
		...styles,
		borderColor: `${isFocused ? '#000000' : '#767676'}`,
		borderRadius: 0,
		boxShadow: `${isFocused ? '0 0 0 1px #000000' : '0 0 0 0 #000000'}`,
		'&:hover': {
			boxShadow: `${isFocused ? '0 0 0 1px #000000' : '0 0 0 0 #000000'}`,
			borderColor: '#000000',
		},
	}),
	valueContainer: (styles) => ({
		...styles,
		padding: '8px 12px',
		fontSize: '1rem',
	}),
	indicatorsContainer: (styles) => ({
		...styles,
		svg: {
			width: '28px',
			height: '28px',
		},
		path: {
			fill: '#000000',
		},
	}),
	indicatorSeparator: () => ({ display: 'none' }),
	option: (styles, { isFocused, isDisabled, isSelected }) => ({
		...styles,
		backgroundColor: isDisabled ? undefined : isSelected ? '#E6E6E6' : isFocused ? '#E6E6E6' : undefined,
		color: '#000000',
		':active': {
			backgroundColor: '#E6E6E6',
		},
	}),
	singleValue: (styles) => ({
		...styles,
		color: '#000000',
	}),
	placeholder: (styles) => ({
		...styles,
		color: '#000000',
	}),
	menu: (styles) => ({
		...styles,
		borderRadius: '0px',
	}),
};

export default reactSelectStyles;
