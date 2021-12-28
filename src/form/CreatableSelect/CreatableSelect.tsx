import React, { useEffect, useState } from 'react';
import { ComponentProps } from 'react';
import Creatable from 'react-select/creatable';
import amsStyles, { StyledLabel } from './ReactSelectStyles';

type CreatableProps = ComponentProps<typeof Creatable>;
export type Props = {
	label?: string;
	createLabel?: string;
} & CreatableProps;

const CreatableSelect: React.FC<Props> = ({
	inputId,
	label,
	options: defaultOptions,
	createLabel = 'Voeg toe',
	onCreateOption,
	...props
}) => {
	const [options, setOptions] = useState<CreatableProps['options']>(defaultOptions);

	useEffect(() => {
		setOptions(defaultOptions);
	}, [defaultOptions]);

	return (
		<>
			{label && <StyledLabel htmlFor={inputId} label={label} />}
			<Creatable
				styles={amsStyles}
				inputId={inputId}
				openMenuOnFocus
				formatCreateLabel={(value: string) => `${createLabel} "${value}"`}
				options={options}
				onCreateOption={(inputValue) => {
					setOptions((prevState) => [{ value: inputValue, label: inputValue }, ...(prevState ?? [])]);
					onCreateOption && onCreateOption(inputValue);
				}}
				{...props}
			/>
		</>
	);
};

export default CreatableSelect;
