import React, { LabelHTMLAttributes, ReactNode } from 'react';
import { LabelStyle, LabelTextStyle } from './LabelStyle';
import type { StyleProps } from './LabelStyle';
import usePassPropsToChildren from '../../utils/hooks/usePassPropsToChildren';

export interface LabelProps extends StyleProps, LabelHTMLAttributes<HTMLLabelElement> {
	label: ReactNode;
}

export const Label: React.FunctionComponent<LabelProps> = ({
	children: childrenProps,
	label,
	disabled,
	position,
	...otherProps
}: LabelProps) => {
	const { children } = usePassPropsToChildren(childrenProps, {
		disabled,
	});

	return (
		<LabelStyle {...{ ...otherProps, disabled, position }}>
			<LabelTextStyle position={position}>{label}</LabelTextStyle>
			{children}
		</LabelStyle>
	);
};

Label.defaultProps = {
	position: 'left',
	align: 'flex-start',
};

Label.displayName = 'Label';

export default Label;
