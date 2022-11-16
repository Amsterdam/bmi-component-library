import styled from 'styled-components';
import { Button, themeColor, themeSpacing } from '@amsterdam/asc-ui';

export const FileListTitleStyle = styled.h6`
	align-self: baseline;
	font-weight: 800;
	font-size: 18px;
	line-height: 23px;
	color: ${themeColor('tint', 'level7')};
	margin: 0;
	padding: 0;
`;

export const FileListStyle = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 0;
	margin: 0;
`;

export const FileListItemStyle = styled.li`
	display: flex;
	gap: ${themeSpacing(10)};
	position: relative;
	align-items: center;
	color: ${themeColor('tint', 'level7')};
	width: 100%;
	min-height: 48px;
	padding: 0;
	margin: 0;
`;

export const FileListItemPreviewWrapperStyle = styled.div`
	flex-basis: 50px;
	max-width: 50px;
`;

export const FileListItemImagePreviewStyle = styled.img`
	max-height: 32px;
	max-width: 50px;
	display: block;
`;

export const FileNameStyle = styled.span<{ hasClickListener: boolean }>`
	font-weight: 400;
	font-size: 18px;
	line-height: 160%;
	${({ hasClickListener }) => hasClickListener && 'cursor: pointer;'}
`;

export const FileNameErrorStyle = styled.span`
	font-weight: 700;
	color: ${themeColor('support', 'invalid')};
`;

export const FileListItemButtonStyle = styled(Button)`
	align-self: center;
	font-weight: 400;
	font-size: 18px;
	line-height: 29px;
	margin-left: auto;
`;

export const FileProgressBarStyle = styled.progress`
	position: absolute;
	bottom: 0;
	left: 0;
	height: 10px;
	width: 100%;
	accent-color: ${themeColor('primary')}; /* https://caniuse.com/mdn-css_properties_accent-color */
`;
