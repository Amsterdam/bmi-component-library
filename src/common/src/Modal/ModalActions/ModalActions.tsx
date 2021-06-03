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
	let hasLeftAndRightContent = false;

	React.Children.map(children, (child) => {
		if (child?.type?.name === 'ModalActionsLeft') {
			hasLeftAndRightContent = true;
		}
	});

	return hasLeftAndRightContent ? (
		<ModalActionsSplitStyle>{children}</ModalActionsSplitStyle>
	) : (
		<ModalActionsStyle>{children}</ModalActionsStyle>
	);
};

const ModalActionsLeft = ({ children }: Props) => <ModalActionsLeftStyle>{children}</ModalActionsLeftStyle>;
const ModalActionsRight = ({ children }: Props) => <ModalActionsRightStyle>{children}</ModalActionsRightStyle>;

ModalActions.Left = ModalActionsLeft;
ModalActions.Right = ModalActionsRight;
ModalActions.displayName = 'ModalActions';

export default ModalActions;
