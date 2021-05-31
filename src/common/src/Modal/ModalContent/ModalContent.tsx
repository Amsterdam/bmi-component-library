import React from 'react';
import ModalContentStyle from './ModalContentStyle';

export interface Props {
	children?: React.ReactNode | React.ReactNode[];
}

const ModalContent = ({ children }: Props) => {
	return <ModalContentStyle>{children}</ModalContentStyle>;
};

ModalContent.displayName = 'ModalContent';

export default ModalContent;
