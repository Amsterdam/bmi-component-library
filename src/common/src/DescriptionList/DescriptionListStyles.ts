import styled from 'styled-components';
import { themeColor, themeSpacing } from '@amsterdam/asc-ui';

export const DescriptionStyle = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${themeColor('tint', 'level2')};
	padding: 0 1rem;
	width: 100%;
`;

export const DescriptionHeadingStyle = styled.h2`
	margin-bottom: 0;
`;

export const DescriptionListStyle = styled.dl`
	margin: ${themeSpacing(4)} 0;
`;

export const DescriptionListItemStyle = styled.div`
	&:not(:last-child) {
		margin-bottom: ${themeSpacing(4)};
	}
`;

export const DescriptionListTitleStyle = styled.dt`
	margin-bottom: ${themeSpacing(2)};
`;

export const DescriptionListValueStyle = styled.dd`
	margin: 0;
	font-weight: 700;
`;
