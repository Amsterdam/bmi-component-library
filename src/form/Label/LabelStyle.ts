import styled, { css } from 'styled-components';
import { srOnlyStyle, themeColor, themeSpacing } from '@amsterdam/asc-ui';
import { INPUT_SIZE } from '../../shared/constants';

/* @todo Solution wanted: position `bottom` combined with the current position of the input error message seems wrong, possible solution remove position `bottom` */

interface SharedProps {
	position?: 'top' | 'right' | 'bottom' | 'left';
}

export type StyleProps = {
	srOnly?: boolean;
	disabled?: boolean;
	/* alignment is only enabled with positions `top` and `bottom` */
	align?: 'center' | 'flex-start' | 'flex-end';
} & SharedProps;

export const LabelStyle = styled.label<StyleProps>`
	display: inline-flex;
	align-items: ${({ align, position }) => (position && ['bottom', 'top'].includes(position) ? align : '')};

	${({ srOnly }) => srOnly && srOnlyStyle}
	${({ disabled }) =>
		disabled
			? css`
					opacity: 0.3;
			  `
			: css`
					cursor: pointer;
			  `}
	${({ position }) =>
		(position === 'top' || position === 'bottom') &&
		css`
			flex-direction: column;
		`}
`;

LabelStyle.defaultProps = {
	position: 'left',
	align: 'center',
} as SharedProps;

export const LabelTextStyle = styled.span<SharedProps>`
	font-weight: 700;
	font-size: 18px;
	color: ${themeColor('tint', 'level6')};

	${({ position }) =>
		position === 'top' || position === 'left'
			? css`
					order: 0;
			  `
			: css`
					order: 1;
			  `}

	${({ position }) => {
		/* Would have used css gap for flex, but Safari 14.1 was the first Safari browser to support it */
		const spacing = themeSpacing(2);
		switch (position) {
			case 'bottom':
				return css`
					margin: ${spacing} 0 0 0;
				`;
			case 'left':
				return css`
					margin: 0 ${spacing} 0 0;
					line-height: ${INPUT_SIZE}px;
				`;
			case 'right':
				return css`
					margin: 0 0 0 ${spacing};
					line-height: ${INPUT_SIZE}px;
				`;
			case 'top':
				return css`
					margin: 0 0 ${spacing} 0;
				`;
			default:
				return css`
					margin: 0;
				`;
		}
	}}
`;
