import React from 'react';
import { Divider } from '@amsterdam/asc-ui';
import {
	ModalActionsStyle,
	ModalActionsLeftStyle,
	ModalActionsRightStyle,
	ModalActionsSplitStyle,
} from './ModalActionsStyles';

export interface Props {
	children?: React.ReactNode | React.ReactNode[] | any;
	hideDivider?: boolean;
}
export interface IModalActions extends React.FunctionComponent<Props> {
	Left: React.FunctionComponent<Props>;
	Right: React.FunctionComponent<Props>;
}

const ModalActions = ({ children, hideDivider = false }: Props) => {
	return React.Children.count(children) > 1 ? (
		<ModalActionsSplitStyle data-testid="modal-actions" hideDivider={hideDivider}>
			<Divider data-testid="modal-actions-divider" />
			{children}
		</ModalActionsSplitStyle>
	) : (
		<ModalActionsStyle data-testid="modal-actions" hideDivider={hideDivider}>
			<Divider data-testid="modal-actions-divider" />
			{children}
		</ModalActionsStyle>
	);
};

const ModalActionsLeft = ({ children }: Props) => (
	<ModalActionsLeftStyle data-testid="modal-actions-left">{children}</ModalActionsLeftStyle>
);
const ModalActionsRight = ({ children }: Props) => (
	<ModalActionsRightStyle data-testid="modal-actions-right">{children}</ModalActionsRightStyle>
);

ModalActions.Left = ModalActionsLeft;
ModalActions.Right = ModalActionsRight;
ModalActions.displayName = 'ModalActions';

export default ModalActions;
