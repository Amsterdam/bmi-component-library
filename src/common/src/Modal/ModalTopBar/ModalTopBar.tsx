import React from 'react';
import { Button, Heading, Icon } from '@amsterdam/asc-ui';
import { Close } from '@amsterdam/asc-assets';
import ModalTopBarStyle from './ModalTopBarStyles';

export interface Props {
	children?: React.ReactNode | React.ReactNode[];
	hideCloseButton?: boolean;
	onCloseButton?: (evt: React.SyntheticEvent) => void;
}

const ModalTopBar = ({ hideCloseButton = false, onCloseButton, children }: Props) => {
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
					if (typeof onCloseButton !== 'undefined') {
						onCloseButton(evt);
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
		<ModalTopBarStyle>
			<Heading forwardedAs="div" style={{ flexGrow: 1 }}>
				{children}
				{renderCloseButton()}
			</Heading>
		</ModalTopBarStyle>
	);
};

ModalTopBar.displayName = 'ModalTopBar';

export default ModalTopBar;
