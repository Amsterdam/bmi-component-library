import styled from 'styled-components';
import { Modal, themeSpacing, breakpoint } from '@amsterdam/asc-ui';

export const ModalStyle = styled(Modal)`
	div[role='dialog'] {
		max-width: 90%;
		max-height: 90%;
		overflow: scroll;

		@media screen and ${breakpoint('min-width', 'desktopL')} {
			max-height: 1024px;
			max-width: 1280px;
		}
	}
`;

export const ModalBlockStyle = styled.div`
	display: block;
	padding: 0 ${themeSpacing(3)};
	margin: ${themeSpacing(3)} 0;

	@media screen and ${breakpoint('min-width', 'tabletM')} {
		padding: ${themeSpacing(0)} ${themeSpacing(7)};
		margin: ${themeSpacing(7)} 0;
	}
`;
