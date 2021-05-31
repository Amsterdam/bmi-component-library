import React from 'react';
import ActionsStyle from './ModalActionsStyle';

export interface Props {
	children?: React.ReactNode | React.ReactNode[];
}

const Actions = ({ children }: Props) => {
	return <ActionsStyle>{children}</ActionsStyle>;
};

Actions.displayName = 'ModalActions';

export default Actions;
