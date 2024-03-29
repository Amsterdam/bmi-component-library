import styled from 'styled-components';

const ModalContentStyle = styled.div`
	overflow-y: auto;
	overflow-x: hidden;
	max-height: calc(90vh - 128px);

	> *:last-child:not(:only-child) {
		margin-bottom: 0;
	}
`;

export default ModalContentStyle;
