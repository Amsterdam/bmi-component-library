import styled from 'styled-components';
import { Spinner } from '@amsterdam/asc-ui';
import { ComponentProps } from 'react';

export const DocumentViewerStyle = styled.div`
	display: flex;
	flex-direction: column;
`;

export const SpinnerStyle = styled(Spinner)<ComponentProps<typeof Spinner>>`
	margin: 0 auto;
`;
