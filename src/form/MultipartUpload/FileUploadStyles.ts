import styled from 'styled-components';
import {themeColor} from "@amsterdam/asc-ui";

export const FileSelectorZone = styled.div`
	display: inline-block;
	width: 100%;
	height: 100px;
	border: 1px dashed ${themeColor('tint', 'level6')};
	border-radius: 0;
	text-align: center;
	padding: 30px;
`;

export const FileItem = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
	width: 100%;
	margin: 5px 0;
`;

export const ProgressBar= styled.div`
	flex: 1;
	height: 25px;
	border-radius: 5px;
	background: #e0e0e0;
	overflow: hidden;
`;
export const ProgressFill = styled.div`
	height: 100%;
	width: 0%;
	background: #4caf50;
	transition: width 0.4s linear;
	text-align: center;
	font-weight: bold;
	padding: 5px 10px;
`;

export const AbortButton = styled.button`
	flex-shrink: 0;
`;
