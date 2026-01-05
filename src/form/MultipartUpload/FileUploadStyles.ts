import styled, {StyledComponent} from 'styled-components';
import React from 'react';
import {themeColor} from "@amsterdam/asc-ui";

export const UploadProgressStyle: StyledComponent<'div', any, React.HTMLProps<HTMLDivElement>> = styled.div`
	border-radius: 5px;
	background: black;
	color: white;
	text-align: center;
`;

export const FileSelectorZone = styled.div`
	display: inline-block;
	width: 100%;
	height: 100px;
	border: 1px dashed ${themeColor('tint', 'level6')};
	border-radius: 0;
	text-align: center;
	padding: 30px;
`;
