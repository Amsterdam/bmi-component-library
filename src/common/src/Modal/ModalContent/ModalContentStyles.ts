import styled from 'styled-components';
import DescriptionList from '../../DescriptionList/DescriptionList';

const ModalContentStyle = styled.div`
	overflow-y: auto;
	overflow-x: hidden;
	max-height: calc(90vh - 128px);
`;


export const ListStyle: any = styled(DescriptionList)`
	${DescriptionList.base} {
		background-color: pink;
	}

	${DescriptionList.list} {
		background-color: pink;
	}
`;

export default ModalContentStyle;
