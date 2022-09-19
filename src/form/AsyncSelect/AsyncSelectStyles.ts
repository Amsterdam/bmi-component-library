import { StylesConfig } from 'react-select';
import { themeColor as themeColorAsc, themeSpacing as themeSpacingAsc, calculateFluidStyle } from 'asc-ui-beta';
import { useTheme } from 'styled-components';

import { Props } from './AsyncSelect';

// @see https://designsystem.amsterdam.nl/7awj1hc9f/p/6561a5-selection-dropdown
// @see https://react-select.com/styles
// @see https://github.com/Amsterdam/amsterdam-styled-components/blob/main/packages/asc-ui/src/components/Select/SelectStyle.ts
const getReactSelectStyles = ({ error = false, zIndexMenu }: Props) => {
	function themeColor(type: string, variant?: string) {
		//@ts-ignore
		return themeColorAsc(type, variant)({ theme: useTheme() });
	}

	function themeSpacing(top: Number, right?: Number, bottom?: Number, left?: Number) {
		//@ts-ignore
		return themeSpacingAsc(top, right, bottom, left)({ theme: useTheme() });
	}
	// const colorInvalid = themeColor('support', 'invalid');
	// const colorPrimary = themeColor('primary');

	return {
		control: (styles, { isFocused }) => ({
			...styles,
			borderWidth: '1px',
			borderColor: `${error ? themeColor('support', 'invalid') : themeColor('primary')}`,
			borderRadius: 0,
			boxShadow: `${isFocused ? `inset 0 0 0 1px ${themeColor('primary')}` : 'none'}`,
			'&:hover': {
				boxShadow: error
					? `${isFocused ? `inset 0 0 0 1px ${themeColor('support', 'invalid')}` : 'none'}`
					: `${isFocused ? `inset 0 0 0 1px ${themeColor('primary')}` : 'none'}`,
			},
		}),
		valueContainer: (styles) => ({
			...styles,
			padding: `${themeSpacing(2, 4)}`,
			fontSize: `${calculateFluidStyle(18, 24)}`,
		}),
		indicatorsContainer: (styles) => ({
			...styles,
			svg: {
				width: '28px',
				height: '28px',
			},
			path: {
				fill: `${themeColor('primary')}`,
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
			borderRadius: '0',
			zIndex: zIndexMenu ? zIndexMenu : styles.zIndex,
		}),
		menuPortal: (styles) => (zIndexMenu ? { ...styles, zIndex: zIndexMenu } : styles),
	} as StylesConfig;
};

export default getReactSelectStyles;
