import React from 'react';
import { ComponentProps } from 'react';
import Creatable from 'react-select/creatable';
import amsStyles, { StyledLabel } from './ReactSelectStyles';

export type Props = {
	label?: string;
	createLabel?: string;
} & ComponentProps<typeof Creatable>;

const CreatableSelect: React.FC<Props> = ({ inputId, label, createLabel = 'Voeg toe', ...props }) => {
	return (
		<>
			{label && <StyledLabel htmlFor={inputId} label={label} />}
			<Creatable
				styles={amsStyles}
				inputId={inputId}
				openMenuOnFocus
				{...props}
				formatCreateLabel={(value: string) => `${createLabel} "${value}"`}
			/>
		</>
	);
};

export default CreatableSelect;
