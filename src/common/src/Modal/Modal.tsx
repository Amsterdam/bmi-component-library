import React from 'react';
import classNames from 'classnames';
import Actions, { Props as IModalActionsProps } from './ModalActions/ModalActions';
import Content, { Props as IModalContentProps } from './ModalContent/ModalContent';
import TopBar, { Props as IModalTopBarProps } from './ModalTopBar/ModalTopBar';
import { ModalStyle } from './ModalStyles';

export interface Props {
	id: string;
	disablePortal?: boolean;
	open?: boolean;
	children?: any;
	onClose?: () => void;
	closeOnBackdropClick?: boolean;
	classnames?: string;
}

interface IModalFunctionComponent extends React.FunctionComponent<Props> {
	TopBar: React.FunctionComponent<IModalTopBarProps>;
	Content: React.FunctionComponent<IModalContentProps>;
	Actions: React.FunctionComponent<IModalActionsProps>;
}

const Modal: IModalFunctionComponent = ({
	children,
	classnames,
	onClose,
	id,
	open = false,
	disablePortal = false,
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

	const classes = classNames('modal', classnames, {
		'has-actions': hasActions,
	});

	return (
		<ModalStyle
			id={id}
			className={classes}
			open={open}
			onClose={handleClose}
			disablePortal={disablePortal}
			aria-labelledby="modal"
		>
			{childrenWithProps}
		</ModalStyle>
	);
};

Modal.TopBar = TopBar;
Modal.Content = Content;
Modal.Actions = Actions;
Modal.displayName = 'Modal';

export default Modal;
