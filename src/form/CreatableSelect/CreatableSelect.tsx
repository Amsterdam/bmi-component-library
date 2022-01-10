import React from 'react';
import { ComponentProps } from 'react';
import Creatable from 'react-select/creatable';
import getAMSStyles, { StyledLabel } from './ReactSelectStyles';

type CreatableProps = ComponentProps<typeof Creatable>;
export type Props = {
	label?: string;
	createLabel?: string;
	error?: boolean;
	zIndexMenu?: number;
} & CreatableProps;

const CreatableSelect: React.FC<Props> = ({
	inputId,
	label,
	options,
	value,
	error,
	createLabel = 'Voeg toe',
	...props
}) => {
	return (
		<>
			{label && <StyledLabel htmlFor={inputId} label={label} />}
			<Creatable
				styles={getAMSStyles({ error, ...props })}
				value={value}
				inputId={inputId}
				openMenuOnFocus
				formatCreateLabel={(value: string) => `${createLabel} "${value}"`}
				options={options}
				{...props}
			/>
		</>
	);
};

export default CreatableSelect;
