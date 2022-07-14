import styled from 'styled-components';
import { TopBar, Divider, breakpoint, themeSpacing } from '@amsterdam/asc-ui';

const ModalTopBarStyle = styled(TopBar)<{ hideDivider: boolean }>`
	display: grid;
	grid-template-columns: 1fr auto;
	grid-template-rows: 44px ${themeSpacing(6)};
	padding: 0;

	@media screen and ${breakpoint('min-width', 'tabletS')} {
		padding: 0;
	}

	&::after {
		content: unset;
	}

	.truncated {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		min-width: 0;
		font-size: 40px;
		font-weight: 800;
		letter-spacing: 0;
		font-style: normal;
		line-height: 110%;
	}

	${Divider} {
		grid-column: 1 / span 2;
		align-self: flex-end;
		background-color: ${({ hideDivider }) => (hideDivider ? 'transparent' : '#000')};
	}
`;

export default ModalTopBarStyle;
