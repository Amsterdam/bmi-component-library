import React from 'react';
import { ComponentProps } from 'react';
import Creatable from 'react-select/creatable';
import amsStyles, { StyledLabel } from './ReactSelectStyles';

type CreatableProps = ComponentProps<typeof Creatable>;
export type Props = {
	label?: string;
	createLabel?: string;
} & CreatableProps;

const CreatableSelect: React.FC<Props> = ({ inputId, label, options, value, createLabel = 'Voeg toe', ...props }) => {
	return (
		<>
			{label && <StyledLabel htmlFor={inputId} label={label} />}
			<Creatable
				styles={amsStyles}
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
