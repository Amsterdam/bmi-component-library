import React from 'react';
import ModalContentStyle from './ModalContentStyles';

export interface ModalContentProps {
	children?: React.ReactNode | React.ReactNode[];
}

const ModalContent: React.FC<ModalContentProps> = ({ children }) => {
	return <ModalContentStyle>{children}</ModalContentStyle>;
};

export default ModalContent;
