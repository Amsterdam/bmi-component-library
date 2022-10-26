import React from 'react';
import { Divider } from '@amsterdam/asc-ui';
import {
	ModalActionsStyle,
	ModalActionsLeftStyle,
	ModalActionsRightStyle,
	ModalActionsSplitStyle,
} from './ModalActionsStyles';

export type ModalActionsProps = {
	children?: React.ReactNode | React.ReactNode[] | any;
	hideDivider?: boolean;
};
export interface IModalActions extends React.FunctionComponent<ModalActionsProps> {
	Left: React.FunctionComponent<ModalActionsProps>;
	Right: React.FunctionComponent<ModalActionsProps>;
}

const ModalActions: IModalActions = ({ children, hideDivider = true }) => {
	return React.Children.count(children) > 1 ? (
		<ModalActionsSplitStyle data-testid="modal-actions" hideDivider={hideDivider}>
			<Divider />
			{children}
		</ModalActionsSplitStyle>
	) : (
		<ModalActionsStyle data-testid="modal-actions" hideDivider={hideDivider}>
			<Divider />
			{children}
		</ModalActionsStyle>
	);
};

const ModalActionsLeft = ({ children }: ModalActionsProps) => <ModalActionsLeftStyle>{children}</ModalActionsLeftStyle>;
const ModalActionsRight = ({ children }: ModalActionsProps) => (
	<ModalActionsRightStyle>{children}</ModalActionsRightStyle>
);

ModalActions.Left = ModalActionsLeft;
ModalActions.Right = ModalActionsRight;

export default ModalActions;
