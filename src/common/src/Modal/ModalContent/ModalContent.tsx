import React from 'react';
import ContentStyle from './ModalContentStyle';

export interface Props {
	children?: React.ReactNode | React.ReactNode[];
}

const ModalContent = ({ children }: Props) => {
	return <ContentStyle>{children}</ContentStyle>;
};

ModalContent.displayName = 'ModalContent';

export default ModalContent;
