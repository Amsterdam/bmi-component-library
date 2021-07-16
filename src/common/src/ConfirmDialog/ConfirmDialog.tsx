import { Heading } from '@amsterdam/asc-ui';
import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { ModalBlockStyle } from '../Modal/ModalStyles';
import { ButtonStyles } from './ConfirmDialogStyles';

type ConfirmDialog = {};

export type Props = {
	title: string;
	message: string;
	textCancelButton: string;
	textConfirmButton: string;
	onCancel: () => void;
	onConfirm: () => void;
};

const ConfirmDialog: React.FC<Props> = ({
	title,
	message,
	textCancelButton,
	textConfirmButton,
	onCancel,
	onConfirm,
}: Props) => {
	const [isModalVisible, setModalVisibility] = useState<boolean>(true);

	return (
		<Modal id="confirm-dialog" open={isModalVisible} onClose={() => setModalVisibility(false)}>
			<Modal.TopBar>
				<Heading forwardedAs="h4">{title}</Heading>
			</Modal.TopBar>
			<Modal.Content>
				<ModalBlockStyle>{message}</ModalBlockStyle>
			</Modal.Content>
			<Modal.Actions>
				<Modal.Actions.Left>
					<ButtonStyles
						data-testid="cancel-button"
						style={{ marginRight: '8px' }}
						variant="primaryInverted"
						onClick={() => {
							setModalVisibility(false);
							if (typeof onCancel !== 'undefined') {
								onCancel();
							}
						}}
					>
						{textCancelButton}
					</ButtonStyles>
					<ButtonStyles
						data-testid="confirm-button"
						variant="primary"
						onClick={() => {
							setModalVisibility(false);
							onConfirm();
						}}
					>
						{textConfirmButton}
					</ButtonStyles>
				</Modal.Actions.Left>
			</Modal.Actions>
		</Modal>
	);
};

export default ConfirmDialog;
