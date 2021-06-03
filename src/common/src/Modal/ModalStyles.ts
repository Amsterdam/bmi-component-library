import styled from 'styled-components';
import { Modal, themeSpacing, breakpoint } from '@amsterdam/asc-ui';

export const ModalStyle = styled(Modal)`
	max-width: 90%;
	max-height: 90%;
	overflow: scroll;

	&.modal-sm {
		max-width: 540px; /* breakpoint tabletS */
		max-height: 800px;
	}

	&.modal-lg {
		max-width: 1024px; /* breakpoint laptop */
		max-height: 1280px;
	}

	&.modal-xl {
		max-width: 1920px; /* breakpoint */
		max-height: 2180px;
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
