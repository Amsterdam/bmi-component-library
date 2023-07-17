import { Children } from 'react';
import type { FC, ReactNode } from 'react';

import { Divider } from '@amsterdam/asc-ui';
import {
	ModalActionsStyle,
	ModalActionsLeftStyle,
	ModalActionsRightStyle,
	ModalActionsSplitStyle,
} from './ModalActionsStyles';

export type ModalActionsProps = {
	children?: ReactNode | ReactNode[] | any;
	hideDivider?: boolean;
};
export interface IModalActions extends FC<ModalActionsProps> {
	Left: FC<ModalActionsProps>;
	Right: FC<ModalActionsProps>;
}

const ModalActions: IModalActions = ({ children, hideDivider = true }) => {
	return Children.count(children) > 1 ? (
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
