import React from 'react';
import {
	ModalActionsStyle,
	ModalActionsLeftStyle,
	ModalActionsRightStyle,
	ModalActionsSplitStyle,
} from './ModalActionsStyles';

export interface Props {
	children?: React.ReactNode | React.ReactNode[] | any;
}
export interface IModalActions extends React.FunctionComponent<Props> {
	Left: React.FunctionComponent<Props>;
	Right: React.FunctionComponent<Props>;
}

const ModalActions = ({ children }: Props) => {
	return React.Children.count(children) > 1 ? (
		<ModalActionsSplitStyle data-testid="modal-actions">{children}</ModalActionsSplitStyle>
	) : (
		<ModalActionsStyle data-testid="modal-actions">{children}</ModalActionsStyle>
	);
};

const ModalActionsLeft = ({ children }: Props) => <ModalActionsLeftStyle>{children}</ModalActionsLeftStyle>;
const ModalActionsRight = ({ children }: Props) => <ModalActionsRightStyle>{children}</ModalActionsRightStyle>;

ModalActions.Left = ModalActionsLeft;
ModalActions.Right = ModalActionsRight;
ModalActions.displayName = 'ModalActions';

export default ModalActions;
