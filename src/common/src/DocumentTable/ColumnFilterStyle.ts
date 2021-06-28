import styled from 'styled-components';
import { Input, themeColor } from '@amsterdam/asc-ui';
import CancelIcon from '@material-ui/icons/Cancel';

export const CancelIconStyle = styled(CancelIcon)`
	&& {
		position: absolute;
		right: 4px;
		top: 11px;
		width: 0.8em;
		height: 0.8em;
		cursor: pointer;
	}
`;

// I wasn't able to figure out howto type this in set time-box ¯\_(ツ)_/¯
export const InputStyle = styled<any>(Input)`
	&& {
		border: 1px solid ${themeColor('tint', 'level5')};
		height: 32px;
		padding: 0 26px 0 4px;
	}
`;

export default styled.div`
	position: relative;
`;
