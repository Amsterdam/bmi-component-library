import styled, { css } from 'styled-components';
import { breakpoint, Button, themeColor, themeSpacing } from '@amsterdam/asc-ui';
import { FileListStyle } from './FileList/FileListStyles';

export const FileUploadContainerStyle = styled.div``;

export const FileUploadStyle = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	min-width: 70px;
	padding: ${themeSpacing(6)};
	border: 1px dashed ${themeColor('tint', 'level6')};
	border-radius: 0;
	outline: none;
	cursor: pointer;
`;

export const FileUploadPlaceholderTextCss = css`
	font-weight: 400;
	font-size: 24px;
	line-height: 160%;
	color: ${themeColor('tint', 'level7')};
`;

export const FileUploadPlaceholderStyle = styled.p`
	${FileUploadPlaceholderTextCss}

	display: none;
	margin: 0;
	align-items: center;
	justify-content: center;

	@media screen and ${breakpoint('min-width', 'laptop')} {
		display: flex;
	}
`;

export const FileUploadSelectFilesButtonStyle = styled(Button)`
	${FileUploadPlaceholderTextCss}

	color: ${themeColor('primary')};
	text-decoration: underline;

	@media screen and ${breakpoint('min-width', 'laptop')} {
		margin-left: ${themeSpacing(2)};
	}
`;

export const FileUploadContentStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	& > span {
		margin-left: ${themeSpacing(2)};
		padding-right: 0;
		max-width: ${themeSpacing(4)};
	}

	/* Only show the placeholder and select files button when there are no files */
	${FileListStyle}:not(:empty) ~ ${FileUploadPlaceholderStyle},
	${FileListStyle}:not(:empty) ~ ${FileUploadSelectFilesButtonStyle} {
		display: none;
	}
`;
