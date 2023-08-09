import type { ComponentProps, FC } from 'react';
import ReactSelect, { components, DropdownIndicatorProps } from 'react-select';
import { DropdownIndicatorStyle, getSelectStyle } from './SelectStyles';

export type Props = {
	error?: boolean;
	zIndexMenu?: number;
	maxWidth?: string;
} & ComponentProps<typeof ReactSelect>;

export const DropdownIndicator = (props: DropdownIndicatorProps) => {
	return (
		<components.DropdownIndicator {...props}>
			<DropdownIndicatorStyle />
		</components.DropdownIndicator>
	);
};

export const Select: FC<Props> = ({ inputId, options, value, error, ...props }) => {
	return (
		<ReactSelect
			styles={getSelectStyle({ error, ...props })}
			value={value}
			options={options}
			inputId={inputId}
			components={{ DropdownIndicator }}
			openMenuOnFocus
			menuPlacement="bottom"
			{...props}
		/>
	);
};

export default Select;
