import { StylesConfig } from 'react-select';
import { themeColor as themeColorAsc, themeSpacing as themeSpacingAsc, calculateFluidStyle } from 'asc-ui-beta';
import styled from 'styled-components';
import { Props } from './AsyncSelect';
import { ascDefaultTheme } from 'asc-ui-beta';

// Proxy to add the used theme
function themeColor(type: string, variant?: string) {
	//@ts-ignore
	return themeColorAsc(type, variant)({ theme: ascDefaultTheme });
}
// Proxy to add the used theme
function themeSpacing(top: Number, right?: Number, bottom?: Number, left?: Number) {
	//@ts-ignore
	return themeSpacingAsc(top, right, bottom, left)({ theme: ascDefaultTheme });
}

export const DropdownIndicatorStyle = styled.span`
	border-right: 3px solid;
	border-bottom: 3px solid;
	height: ${calculateFluidStyle(16, 24)};
	width: ${calculateFluidStyle(16, 24)};
	transform: rotate(45deg) translateY(-7px);
	border-color: inherit;
`;

// @see https://designsystem.amsterdam.nl/7awj1hc9f/p/6561a5-selection-dropdown
// @see https://react-select.com/styles
// @see https://github.com/Amsterdam/amsterdam-styled-components/blob/main/packages/asc-ui/src/components/Select/SelectStyle.ts
export const getAsyncSelectStyle = ({ error = false, zIndexMenu }: Props) => {
	return {
		control: (styles, { isFocused }) => ({
			...styles,
			borderWidth: '2px',
			borderColor: `${error ? themeColor('support', 'invalid') : themeColor('primary')}`,
			borderRadius: 0,
			boxShadow: `${isFocused ? `inset 0 0 0 1px ${themeColor('primary')}` : 'none'}`,
			'&:hover': {
				boxShadow: error
					? `inset 0 0 0 1px ${themeColor('support', 'invalid')}`
					: `inset 0 0 0 1px ${themeColor('primary')}`,
			},
			color: `${isFocused ? themeColor('primary', 'dark') : themeColor('primary')}`,
			height: `${calculateFluidStyle(48, 56)}`,
		}),
		input: (styles, { isDisabled }) => ({
			...styles,
			color: `${isDisabled ? themeColor('primary', 'dark') : themeColor('primary')}`,
		}),
		menuList: (styles) => ({
			...styles,
			padding: '0',
			maxHeight: `calc( 8 * ${calculateFluidStyle(
				48,
				56,
			)})` /* 8 is the max number of options to show before adding a scrollbar */,
		}),
		valueContainer: (styles, { isDisabled }) => ({
			...styles,
			padding: `${themeSpacing(0, 3)}`,
			fontSize: `${calculateFluidStyle(18, 24)}`,
		}),
		dropdownIndicator: (styles, { isFocused }) => ({
			...styles,
			color: themeColor('primary'),
			'&:hover': {
				color: `${isFocused ? themeColor('primary', 'dark') : themeColor('primary')}`,
			},
		}),
		indicatorsContainer: (styles) => ({
			...styles,
			paddingRight: `${themeSpacing(3)}`,
			color: themeColor('primary'),
		}),
		indicatorSeparator: () => ({ display: 'none' }),
		noOptionsMessage: (styles) => ({
			...styles,
			padding: `${themeSpacing(0, 3)}`,
			height: `${calculateFluidStyle(48, 56)}`,
			fontSize: `${calculateFluidStyle(18, 24)}`,
			backgroundColor: `${themeColor('tint', 'level1')}`,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'spaceEvenly',
		}),
		option: (styles, { isFocused, isDisabled, isSelected }) => ({
			...styles,
			padding: `${themeSpacing(0, 3)}`,
			justifyContent: 'space-between',
			display: 'flex',
			alignItems: 'center',
			color: isDisabled
				? `${themeColor('primary')}`
				: isSelected
				? `${themeColor('tint', 'level1')}`
				: isFocused
				? `${themeColor('tint', 'level1')}`
				: `${themeColor('primary')}`,
			height: `${calculateFluidStyle(48, 56)}`,
			fontSize: `${calculateFluidStyle(18, 24)}`,
			backgroundColor: isDisabled
				? `${themeColor('tint', 'level1')}`
				: isSelected
				? `${themeColor('primary')}`
				: isFocused
				? `${themeColor('primary')}`
				: `${themeColor('tint', 'level1')}`,
			':active': {
				backgroundColor: `${themeColor('primary')}`,
			},
			'::after': {
				content: isSelected ? '""' : undefined,
				float: 'right',
				border: `solid ${themeColor('tint', 'level1')}`,
				borderWidth: '0 3px 3px 0',
				transform: 'rotate(45deg) translate(-7px, 0)',
				width: '16px',
				height: '24px',
			},
		}),
		singleValue: (styles) => ({
			...styles,
			color: `${themeColor('level', 'level6')}`,
		}),
		placeholder: (styles) => ({
			...styles,
			color: `${themeColor('tint', 'level4')}`,
		}),
		menu: (styles) => ({
			...styles,
			borderRadius: '0',
			margin: '0',
			zIndex: zIndexMenu ? zIndexMenu : styles.zIndex,
			padding: '0 3px 3px 3px',
			boxShadow: `inset 0 0 0 3px ${themeColor('primary')}`,
		}),
		menuPortal: (styles) => (zIndexMenu ? { ...styles, zIndex: zIndexMenu } : styles),
	} as StylesConfig;
};
