import styled from 'styled-components';
import { breakpoint, Button, themeColor, themeSpacing } from '@amsterdam/asc-ui';

type DragStyleProps = {
	isDragActive?: boolean;
	isDragAccept?: boolean;
	isDragReject?: boolean;
};

const getColor = ({ isDragActive }: DragStyleProps) => {
	if (isDragActive) {
		return themeColor('tint', 'level3');
	}
	return themeColor('tint', 'level2');
};

export const FileUploadStyle = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	max-width: 620px;
	min-width: 70px;
	padding: ${themeSpacing(8)};
	border-width: 2px;
	border-radius: 2px;
	background-color: ${(props) => getColor(props as DragStyleProps)};
	border-color: ${(props) => getColor(props as DragStyleProps)};
	color: ${themeColor('tint', 'level7')};
	transition: border 0.24s ease-in-out;
	outline: none;
	cursor: pointer;
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
`;

export const FileUploadPlaceholderStyle = styled.p`
	display: none;
	margin: 0;

	@media screen and ${breakpoint('min-width', 'laptop')} {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const FileUploadSelectFilesButtonStyle = styled(Button)`
	text-decoration: underline;
	font-weight: 500;

	@media screen and ${breakpoint('min-width', 'laptop')} {
		margin-left: ${themeSpacing(2)};
	}
`;
