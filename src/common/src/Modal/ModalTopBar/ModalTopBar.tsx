import React from 'react';
import { Button, Heading, Icon } from '@amsterdam/asc-ui';
import { Close } from '@amsterdam/asc-assets';
import TopBar from './ModalTopBarStyle';

export interface Props {
	children?: React.ReactNode | React.ReactNode[];
	hideCloseButton?: boolean;
	onClose?: (evt: React.SyntheticEvent) => void;
}

const ModalTopBar = ({ hideCloseButton = false, onClose, children }: Props) => {
	const renderCloseButton = () => {
		if (hideCloseButton) {
			return null;
		}

		return (
			<Button
				type="button"
				data-testid="modal-close-button"
				size={30}
				onClick={(evt: React.SyntheticEvent) => {
					if (typeof onClose !== 'undefined') {
						onClose(evt);
					}
				}}
				variant="blank"
			>
				<Icon size={20}>
					<Close />
				</Icon>
			</Button>
		);
	};

	return (
		<TopBar>
			<Heading forwardedAs="div" style={{ flexGrow: 1 }}>
				{children}
				{renderCloseButton()}
			</Heading>
		</TopBar>
	);
};

ModalTopBar.displayName = 'ModalTopBar';

export default ModalTopBar;
