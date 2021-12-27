import { Heading } from '@amsterdam/asc-ui';
import React, { useEffect } from 'react';
import { BehaviorSubject } from 'rxjs';
import Modal from '../Modal/Modal';
import { ModalBlockStyle } from '../Modal/ModalStyles';
import { ButtonStyles } from './ConfirmDialogStyles';

export interface IState {
	message: string;
	onConfirm: () => void;
	title?: string;
	textCancelButton?: string;
	textConfirmButton?: string;
	onCancel?: () => void;
}

const initialState: IState = {
	message: '',
	onConfirm: () => {},
};

const store = new BehaviorSubject(initialState);

export const confirm = ({
	title = 'Waarschuwing',
	message = 'Weet u zeker dat u dit item definitief wilt verwijderen?',
	textConfirmButton = 'Ja',
	textCancelButton = 'Nee',
	onConfirm = () => {},
	onCancel,
}: IState) => {
	store.next({ title, message, textConfirmButton, textCancelButton, onCancel, onConfirm });
};

const ConfirmDialog: React.FC = () => {
	const [state, setState] = React.useState<IState>(initialState);
	const [isVisible, setIsVisible] = React.useState<boolean>(false);

	useEffect(() => {
		store.subscribe((props) => {
			setState({ ...props });
			if (props.message) {
				setIsVisible(true);
			}
		});
		return () => {
			setIsVisible(false);
			store.next(initialState);
		};
	}, []);

	return (
		<Modal id="confirm-dialog" open={isVisible} size="sm">
			<Modal.TopBar hideCloseButton>
				<Heading forwardedAs="h4">{state.title}</Heading>
			</Modal.TopBar>
			<Modal.Content>
				<ModalBlockStyle>{state.message}</ModalBlockStyle>
			</Modal.Content>
			<Modal.Actions>
				<Modal.Actions.Left>
					<ButtonStyles
						data-testid="confirm-button"
						variant="primary"
						style={{ marginRight: '8px' }}
						onClick={() => {
							setIsVisible(false);
							state.onConfirm();
						}}
					>
						{state.textConfirmButton}
					</ButtonStyles>
					<ButtonStyles
						data-testid="cancel-button"
						variant="primaryInverted"
						onClick={() => {
							setIsVisible(false);
							state.onCancel && state.onCancel();
						}}
					>
						{state.textCancelButton}
					</ButtonStyles>
				</Modal.Actions.Left>
			</Modal.Actions>
		</Modal>
	);
};

export default ConfirmDialog;
