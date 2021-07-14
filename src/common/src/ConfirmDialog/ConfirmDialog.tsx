import { Button } from '@amsterdam/asc-ui';
import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { ModalBlockStyle } from '../Modal/ModalStyles';

type ConfirmDialog = {};

export type Props = {
	header: string;
	message: string;
	textCancelButton: string;
	textConfirmButton: string;
	onCancel: () => void;
	onConfirm: () => void;
};

const ConfirmDialog: React.FC<Props> = ({
	header,
	message,
	textCancelButton,
	textConfirmButton,
	onCancel,
	onConfirm,
}: Props) => {
	const [isModalVisible, setModalVisibility] = useState<boolean>(true);

	return (
		<Modal id="test" open={isModalVisible} onClose={() => setModalVisibility(false)}>
			<Modal.TopBar>{header}</Modal.TopBar>
			<Modal.Content>
				<ModalBlockStyle>{message}</ModalBlockStyle>
			</Modal.Content>
			<Modal.Actions>
				<Modal.Actions.Right>
					<Button
						onClick={() => {
							setModalVisibility(false);
							if (typeof onCancel !== 'undefined') {
								onCancel();
							}
						}}
					>
						{textCancelButton}
					</Button>
					<Button
						onClick={() => {
							setModalVisibility(false);
							onConfirm();
						}}
					>
						{textConfirmButton}
					</Button>
				</Modal.Actions.Right>
			</Modal.Actions>
		</Modal>
	);
};

export default ConfirmDialog;
