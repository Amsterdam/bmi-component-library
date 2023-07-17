import styled from 'styled-components';
import { Modal, themeSpacing, breakpoint } from '@amsterdam/asc-ui';
import { ModalTopBarStyle } from './ModalTopBar/ModalTopBarStyles';

export const ModalStyle = styled(Modal)`
	max-width: 90%;
	max-height: fit-content;
	overflow: visible;
	padding: ${themeSpacing(8)};

	&.modal-xs {
		max-width: 320px; /* breakpoint phone */
	}

	&.modal-sm {
		max-width: 540px; /* breakpoint tabletS */
	}

	&.modal-md {
		max-width: 768px; /* breakpoint tabletM */
	}

	&.modal-lg {
		max-width: 1024px; /* breakpoint laptop */
	}

	&.modal-xl {
		max-width: 1920px; /* breakpoint desktop */
	}

	${ModalTopBarStyle} {
		min-height: 44px;
	}
`;

export const ModalBlockStyle = styled.div`
	display: block;
	padding: 0;
	margin: ${themeSpacing(3)} 0;

	@media screen and (${breakpoint('min-width', 'tabletM')}) {
		margin: ${themeSpacing(7)} 0;
	}
`;
