import { Heading } from '@amsterdam/asc-ui';
import { useEffect, useState, useRef } from 'react';
import type { ReactNode, FC } from 'react';

import { BehaviorSubject } from 'rxjs';
import Modal from '../Modal/Modal';
import { ButtonStyles, MessageStyle } from './ConfirmDialogStyles';

export interface IState {
	message: ReactNode;
	onConfirm: () => void;
	title?: string;
	textCancelButton?: string;
	textConfirmButton?: string;
	onCancel?: () => void;
	size?: string;
	onClose?: () => void;
}

export type Props = {
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	backdropOpacity?: number;
	hideCloseButton?: boolean;
	zIndexOffset?: number;
	disablePortal?: boolean;
	open?: boolean;
	store?: BehaviorSubject<IState>;
};

export const initialState: IState = {
	message: '',
	onConfirm: () => {},
};

const subject = new BehaviorSubject<IState>(initialState);

export const confirm = (
	{
		title = 'Waarschuwing',
		message = 'Weet u zeker dat u dit item definitief wilt verwijderen?',
		textConfirmButton = 'Ja',
		textCancelButton = 'Nee',
		onConfirm = () => {},
		onCancel,
	}: IState,
	store = subject,
) => {
	store.next({ title, message, textConfirmButton, textCancelButton, onCancel, onConfirm });
};

export interface IConfirmDialog extends FC<Props> {}

const ConfirmDialog: IConfirmDialog = ({
	size = 'sm',
	hideCloseButton = true,
	backdropOpacity = 0.3,
	zIndexOffset = 1,
	disablePortal = false,
	open = false,
	store = subject,
}: Props) => {
	const mounted = useRef(false);
	const [state, setState] = useState<IState>(initialState);
	const [isVisible, setIsVisible] = useState<boolean>(open);

	useEffect(() => {
		mounted.current = true;
		store.subscribe((props) => {
			if (mounted.current === false) return;
			setState({ ...props });
			if (props.message) {
				setIsVisible(true);
			}
		});
		return () => {
			mounted.current = false;
			setIsVisible(false);
			store.next(initialState);
		};
	}, []);

	return (
		<Modal
			id="confirm-dialog"
			data-testid="confirm-dialog"
			open={isVisible}
			size={size}
			backdropOpacity={backdropOpacity}
			zIndexOffset={zIndexOffset}
			disablePortal={disablePortal}
		>
			<Modal.TopBar
				onCloseButton={() => {
					setIsVisible(false);
					state.onCancel && state.onCancel();
				}}
				hideCloseButton={hideCloseButton}
			>
				<Heading forwardedAs="h1">{state.title}</Heading>
			</Modal.TopBar>
			<Modal.Content>
				<MessageStyle message={state.message}>{state.message}</MessageStyle>
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
				<Modal.Actions.Right>&nbsp;</Modal.Actions.Right>
			</Modal.Actions>
		</Modal>
	);
};

export default ConfirmDialog;
