import React from 'react';
import { ComponentProps } from 'react';
import Creatable from 'react-select/creatable';
import { getSelectStyle, StyledLabel } from './ReactSelectStyles';
import { SelectContainer } from '../Select';

type CreatableProps = ComponentProps<typeof Creatable>;
export type Props = {
	label?: string;
	createLabel?: string;
	error?: boolean;
	zIndexMenu?: number;
	['data-testid']?: string;
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
				styles={getSelectStyle({ error, ...props })}
				value={value}
				inputId={inputId}
				openMenuOnFocus
				formatCreateLabel={(value: string) => `${createLabel} "${value}"`}
				options={options}
				components={{ SelectContainer }}
				{...props}
			/>
		</>
	);
};

export default CreatableSelect;
