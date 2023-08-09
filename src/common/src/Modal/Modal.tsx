import { Children, cloneElement, type ComponentProps, type FC, type ReactNode } from 'react';
import classNames from 'classnames';
import { Modal as ASCModal } from '@amsterdam/asc-ui';

import { ModalStyle } from './ModalStyles';
import ModalTopBar, { ModalTopBarProps } from './ModalTopBar/ModalTopBar';
import ModalContent, { ModalContentProps } from './ModalContent/ModalContent';
import ModalActions, { IModalActions } from './ModalActions/ModalActions';

export type ModalProps = {
	id: string;
	children?: ReactNode | ReactNode[] | any;
	closeOnBackdropClick?: boolean;
	classnames?: string;
	disablePortal?: boolean;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
} & ComponentProps<typeof ASCModal>;

export interface IModal extends FC<ModalProps> {
	TopBar: FC<ModalTopBarProps>;
	Content: FC<ModalContentProps>;
	Actions: FC<IModalActions> | any;
}

const Modal: IModal = ({ id, children, classnames, onClose, size = 'md', disablePortal, open, ...rest }) => {
	const handleClose = () => {
		if (onClose) {
			onClose();
		}
	};

	// Pass id prop on to sub-components + hook up callbacks
	let hasActions = false;
	let childrenWithProps: ReactNode | ReactNode[] | null = null;

	if (children) {
		childrenWithProps = Children.map(children, (child) => {
			if (child.type === (<Modal.TopBar />).type) {
				return cloneElement(child, { id, onClose });
			}
			if (child.type === (<Modal.Actions />).type) {
				hasActions = true;
			}
			return cloneElement(child, { id });
		});
	}

	const classes = classNames('modal', `modal-${size}`, classnames, {
		'has-actions': hasActions,
	});

	return (
		<ModalStyle
			{...rest}
			id={id}
			data-testid="modal"
			aria-labelledby="modal"
			className={classes}
			onClose={handleClose}
			open={open}
			disablePortal={disablePortal}
		>
			{childrenWithProps}
		</ModalStyle>
	);
};

Modal.TopBar = ModalTopBar;
Modal.Content = ModalContent;
Modal.Actions = ModalActions;

export default Modal;
