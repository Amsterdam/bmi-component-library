import styled from 'styled-components';
import { themeColor, Input } from '@amsterdam/asc-ui';
import CancelIcon from '@mui/icons-material/Cancel';
import { ComponentProps } from 'react';

export const CancelIconStyle = styled(CancelIcon)`
	&& {
		position: absolute;
		right: 4px;
		top: 6px;
		width: 20px;
		height: 20px;
		cursor: pointer;
	}
`;

// I wasn't able to figure out howto type this in set time-box ¯\_(ツ)_/¯
export const InputStyle = styled(Input)<ComponentProps<typeof Input>>`
	&& {
		border: 1px solid ${themeColor('tint', 'level5')};
		height: 32px;
		padding: 0 26px 0 4px;
	}
`;

export default styled.div`
	position: relative;
`;
