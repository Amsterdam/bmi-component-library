import styled from 'styled-components';
import { Button, themeSpacing } from '@amsterdam/asc-ui';
import { ModalBlockStyle } from '../Modal/ModalStyles';

import type { ReactNode } from 'react';

export const MessageStyle = styled(ModalBlockStyle)<{ message: ReactNode }>`
	/* Reduce default margin-top on modal content in case message consists of HTML elements (ReactNode) */
	margin-top: ${({ message }) => (typeof message === 'string' ? themeSpacing(3) : themeSpacing(2))};
`;

export const ButtonStyles = styled(Button)`
	justify-content: center;
`;
