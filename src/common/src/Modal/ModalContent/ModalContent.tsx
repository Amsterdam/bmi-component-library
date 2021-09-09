import React from 'react';
import ModalContentStyle, { ListStyle } from './ModalContentStyles';
export interface Props {
	children?: React.ReactNode | React.ReactNode[];
}

const ModalContent = ({ children }: Props) => {
	return (
		<>
			<ModalContentStyle>{children}</ModalContentStyle> <ListStyle list={[{ label: 'hii', value: 'fdf' }]} />
		</>
	);
};

ModalContent.displayName = 'ModalContent';

export default ModalContent;
