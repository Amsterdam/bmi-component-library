import React from 'react';
import ModalActionsStyle from './ModalActionsStyle';

export interface Props {
	children?: React.ReactNode | React.ReactNode[];
}

const ModalActions = ({ children }: Props) => {
	return <ModalActionsStyle>{children}</ModalActionsStyle>;
};

ModalActions.displayName = 'ModalActions';

export default ModalActions;
