import React from 'react';
import { ComponentProps } from 'react';
import Creatable from 'react-select/creatable';
import amsStyles, { StyledLabel } from './ReactSelectStyles';

export type Props = {
	// name: string;
	// id: string;
	label?: string;
} & ComponentProps<typeof Creatable>;

const CreatableSelect: React.FC<Props> = ({ inputId, label, ...props }) => {
	return (
		<>
			{label && <StyledLabel htmlFor={inputId} label={label} />}
			<Creatable styles={amsStyles} inputId={inputId} openMenuOnFocus {...props} />
		</>
	);
};

export default CreatableSelect;
