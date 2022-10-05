/**
 * @fileoverview Based on https://www.figma.com/file/ORa7CBIooPgZj6HsEPBxNR/Design-bibliotheek-(gepubliceerd)?node-id=1303%3A6122
 * The values for Desktop klein are used
 */
import { StylesConfig } from 'react-select';
import {
	ascDefaultTheme,
	themeColor as themeColorAsc,
	themeSpacing as themeSpacingAsc,
	Theme,
} from '@amsterdam/asc-ui';
import styled from 'styled-components';
import { Props } from './Select';

// Proxy to add the used theme
const themeColor = (type?: Theme.ColorType, colorSubtype?: string, override?: string) =>
	themeColorAsc(type, colorSubtype, override)({ theme: ascDefaultTheme });

// Proxy to add the used theme
const themeSpacing = (top: number, right?: number, bottom?: number, left?: number) =>
	themeSpacingAsc(top, right, bottom, left)({ theme: ascDefaultTheme });

export const DropdownIndicatorStyle = styled.span`
	border-right: 3px solid;
	border-bottom: 3px solid;
	height: 11px;
	width: 11px;
	transform: rotate(45deg) translateY(-4px);
	border-color: inherit;
`;

// @see https://designsystem.amsterdam.nl/7awj1hc9f/p/6561a5-selection-dropdown
// @see https://react-select.com/provided
// @see https://github.com/Amsterdam/amsterdam-styled-components/blob/main/packages/asc-ui/src/components/Select/SelectStyle.ts
export function getSelectStyle({ error = false, zIndexMenu }: Props): StylesConfig {
	return {
		control: (provided, { isFocused, isDisabled }) => ({
			...provided,
			pointerEvents: isDisabled ? 'none' : 'auto',
			borderWidth: '1px',
			borderColor: `${
				isDisabled
					? themeColor('tint', 'level4')
					: error
					? themeColor('support', 'invalid')
					: themeColor('primary')
			}`,
			backgroundColor: `${themeColor('tint', 'level1')}`,
			borderRadius: 0,
			boxShadow: `${isDisabled ? 'none' : isFocused ? `inset 0 0 0 1px ${themeColor('primary')}` : 'none'}`,
			'&:hover': {
				boxShadow: error
					? `inset 0 0 0 1px ${themeColor('support', 'invalid')}`
					: `inset 0 0 0 1px ${themeColor('primary')}`,
			},
			color: `${
				isDisabled
					? themeColor('tint', 'level5')
					: isFocused
					? themeColor('primary', 'dark')
					: themeColor('primary')
			}`,
			height: '48px',
		}),
		menuList: (provided) => ({
			...provided,
			padding: '0',
			maxHeight: `calc(8 * 48px)` /* 8 is the max number of options to show before adding a scrollbar */,
		}),
		valueContainer: (provided, { isDisabled }) => ({
			...provided,
			color: `${isDisabled ? themeColor('tint', 'level4') : themeColor('primary')}`,
			padding: `${themeSpacing(0, 3)}`,
			fontSize: '18px',
		}),
		dropdownIndicator: (provided, { isFocused, isDisabled }) => ({
			...provided,
			color: `${
				isDisabled
					? themeColor('tint', 'level3')
					: isFocused
					? themeColor('primary', 'dark')
					: themeColor('primary')
			}`,
			'&:hover': {
				color: `${themeColor('primary', 'dark')}`,
			},
		}),
		indicatorsContainer: (provided) => ({
			...provided,
			paddingRight: `${themeSpacing(3)}`,
			color: `${themeColor('primary')}`,
		}),
		indicatorSeparator: () => ({ display: 'none' }),
		noOptionsMessage: (provided) => ({
			...provided,
			padding: `${themeSpacing(0, 3)}`,
			height: '48px',
			fontSize: '18px',
			backgroundColor: `${themeColor('tint', 'level1')}`,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'spaceEvenly',
		}),
		option: (provided, { isFocused, isDisabled, isSelected }) => ({
			...provided,
			padding: `${themeSpacing(0, 3)}`,
			justifyContent: 'space-between',
			display: 'flex',
			alignItems: 'center',
			color: isDisabled
				? `${themeColor('tint', 'level3')}`
				: isSelected
				? `${themeColor('tint', 'level1')}`
				: isFocused
				? `${themeColor('tint', 'level1')}`
				: `${themeColor('primary')}`,
			height: '48px',
			fontSize: '18px',
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
				transform: 'rotate(45deg) translate(-5px, 0)',
				width: '10px',
				height: '18px',
			},
		}),
		singleValue: (provided) => ({
			...provided,
			color: `${themeColor('tint', 'level7')}`,
		}),
		placeholder: (provided) => ({
			...provided,
			color: `${themeColor('tint', 'level5')}`,
		}),
		menu: (provided) => ({
			...provided,
			borderRadius: '0',
			margin: '0',
			zIndex: zIndexMenu ? zIndexMenu : provided.zIndex,
			padding: '0 2px 2px 2px',
			boxShadow: `inset 0 0 0 2px ${themeColor('primary')}`,
		}),
		menuPortal: (provided) => (zIndexMenu ? { ...provided, zIndex: zIndexMenu } : provided),
	};
}
