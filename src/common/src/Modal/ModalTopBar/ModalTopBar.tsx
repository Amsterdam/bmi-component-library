import React from 'react';
import { Button, Icon, Divider } from '@amsterdam/asc-ui';
import { Close } from '@amsterdam/asc-assets';
import { ModalTopBarStyle, ModalTopBarTruncatedStyle } from './ModalTopBarStyles';

export interface Props {
	children?: React.ReactNode | React.ReactNode[];
	hideDivider?: boolean;
	hideCloseButton?: boolean;
	onCloseButton?: (evt: React.SyntheticEvent) => void;
}

const ModalTopBar = ({ hideCloseButton = false, hideDivider = true, onCloseButton, children }: Props) => {
	const renderCloseButton = () => {
		if (hideCloseButton) {
			return null;
		}
		return (
			<Button
				type="button"
				data-testid="modal-close-button"
				size={26}
				onClick={(evt: React.SyntheticEvent) => {
					if (typeof onCloseButton !== 'undefined') {
						onCloseButton(evt);
					}
				}}
				variant="blank"
			>
				<Icon size={26}>
					<Close />
				</Icon>
			</Button>
		);
	};

	return (
		<ModalTopBarStyle data-testid="modal-top-bar" hideDivider={hideDivider}>
			<ModalTopBarTruncatedStyle>{children}</ModalTopBarTruncatedStyle>
			{renderCloseButton()}
			<Divider />
		</ModalTopBarStyle>
	);
};

ModalTopBar.displayName = 'ModalTopBar';

ModalTopBar.defaultProps = {
	hideDivider: true,
	hideCloseButton: false,
};

export default ModalTopBar;
