import styled from 'styled-components';
import { Button, Icon, themeColor, themeSpacing } from '@amsterdam/asc-ui';

export const FileListStyle = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0;
	margin: 0;
`;

export const FileListItemStyle = styled.li`
	display: flex;
	position: relative;
	align-items: center;
	color: ${themeColor('tint', 'level7')};
	border-bottom: 1px solid ${themeColor('tint', 'level5')};
	padding: ${themeSpacing(4)} 0;
	width: 100%;
`;

export const FileIconStyle = styled(Icon)`
	margin-right: ${themeSpacing(1)};
`;

export const FileNameStyle = styled.span`
	font-weight: 700;
`;

export const FileNameErrorStyle = styled.span`
	font-weight: 700;
	color: ${themeColor('support', 'invalid')};
`;

export const FileRemoveStyle = styled(Button)`
	margin-left: auto;
`;

export const FileCancelStyle = styled(Button)`
	margin-left: auto;
`;

export const FileProgressBarStyle = styled.progress`
	position: absolute;
	bottom: 0;
	left: 0;
	height: ${themeSpacing(0.5)};
	width: 100%;

	&[value] {
		appearance: none;

		::-webkit-progress-bar {
			height: ${themeSpacing(0.5)};
			background-color: ${themeColor('tint', 'level2')};
		}

		::-webkit-progress-value {
			background-color: ${themeColor('tint', 'level4')};
		}
	}
`;
