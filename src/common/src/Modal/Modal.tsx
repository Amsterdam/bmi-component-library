import React from 'react';
import classNames from 'classnames';
import { Modal as ASCModal } from '@amsterdam/asc-ui';

import { ModalStyle } from './ModalStyles';
import ModalTopBar, { Props as IModalTopBarProps } from './ModalTopBar/ModalTopBar';
import ModalContent, { Props as IModalContentProps } from './ModalContent/ModalContent';
import ModalActions, { Props as IModalActionsProps } from './ModalActions/ModalActions';

type Props = {
	id: string;
	children?: React.ReactNode | React.ReactNode[] | any;
	closeOnBackdropClick?: boolean;
	classnames?: string;
	disablePortal?: boolean;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
} & React.ComponentProps<typeof ASCModal>;

export interface IModal extends React.FunctionComponent<Props> {
	TopBar: React.FunctionComponent<IModalTopBarProps>;
	Content: React.FunctionComponent<IModalContentProps>;
	Actions: React.FunctionComponent<IModalActionsProps> | any;
}
// https://github.com/storybookjs/storybook/issues/13408
export const Modal: IModal = ({
	id,
	children,
	classnames,
	onClose,
	size = 'md',
	disablePortal,
	open,
	...rest
}: Props) => {
	const handleClose = () => {
		if (onClose) {
			onClose();
		}
	};

	// Pass id prop on to sub-components + hook up callbacks
	let hasActions = false;
	let childrenWithProps: React.ReactNode | React.ReactNode[] | null = null;

	if (children) {
		childrenWithProps = React.Children.map(children, (child) => {
			if (child.type === (<Modal.TopBar />).type) {
				return React.cloneElement(child, { id, onClose });
			}
			if (child.type === (<Modal.Actions />).type) {
				hasActions = true;
			}
			return React.cloneElement(child, { id });
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
Modal.displayName = 'Modal';

export default Modal;
