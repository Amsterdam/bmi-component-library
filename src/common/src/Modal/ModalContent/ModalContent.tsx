import type { FC, ReactNode } from 'react';
import ModalContentStyle from './ModalContentStyles';

export interface ModalContentProps {
	children?: ReactNode | ReactNode[];
}

const ModalContent: FC<ModalContentProps> = ({ children }) => {
	return <ModalContentStyle>{children}</ModalContentStyle>;
};

export default ModalContent;
