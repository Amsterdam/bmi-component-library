import { Heading } from '@amsterdam/asc-ui';
import React from 'react';
import Modal from '../Modal/Modal';
import { ModalBlockStyle } from '../Modal/ModalStyles';
import { ButtonStyles } from './ConfirmDialogStyles';
import { BehaviorSubject } from 'rxjs';

export interface IState {
	title: string;
	message: string;
	textCancelButton: string;
	textConfirmButton: string;
	onCancel: () => void;
	onConfirm: () => void;
}
const initialState: IState = {
	title: '',
	message: '',
	textCancelButton: '',
	textConfirmButton: '',
	onCancel: () => {},
	onConfirm: () => {},
};

const store = new BehaviorSubject(initialState);

export const confirm = ({ ...props }: IState) => {
	store.next({ ...props });
};
const ConfirmDialog: React.FC<{}> = () => {
	const [state, setState] = React.useState<IState>(initialState);
	const [isVisible, setIsVisible] = React.useState<boolean>(false);

	React.useEffect(() => {
		store.subscribe(({ ...props }) => {
			setState({ ...props });
			if (props.message) {
				setIsVisible(true);
			}
		});
	}, []);
	return (
		<Modal id="confirm-dialog" open={isVisible}>
			<Modal.TopBar hideCloseButton>
				<Heading forwardedAs="h4">{state.title}</Heading>
			</Modal.TopBar>
			<Modal.Content>
				<ModalBlockStyle>{state.message}</ModalBlockStyle>
			</Modal.Content>
			<Modal.Actions>
				<Modal.Actions.Left>
					<ButtonStyles
						data-testid="cancel-button"
						style={{ marginRight: '8px' }}
						variant="primaryInverted"
						onClick={() => {
							setIsVisible(false);
							if (typeof state.onCancel !== 'undefined') {
								state.onCancel();
							}
						}}
					>
						{state.textCancelButton}
					</ButtonStyles>
					<ButtonStyles
						data-testid="confirm-button"
						variant="primary"
						onClick={() => {
							setIsVisible(false);
							state.onConfirm();
						}}
					>
						{state.textConfirmButton}
					</ButtonStyles>
				</Modal.Actions.Left>
			</Modal.Actions>
		</Modal>
	);
};

export default ConfirmDialog;
