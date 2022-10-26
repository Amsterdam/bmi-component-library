import styled from 'styled-components';

const ModalContentStyle = styled.div`
	overflow-y: auto;
	overflow-x: hidden;
	max-height: calc(90vh - 128px);

	> *:first-child {
		margin-top: 0;
	}

	> *:last-child {
		margin-bottom: 0;
	}
`;

export default ModalContentStyle;
