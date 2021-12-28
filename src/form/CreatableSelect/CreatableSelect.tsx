import React, { useEffect, useState } from 'react';
import { ComponentProps } from 'react';
import Creatable from 'react-select/creatable';
import amsStyles, { StyledLabel } from './ReactSelectStyles';

type CreatableProps = ComponentProps<typeof Creatable>;
export type Props = {
	label?: string;
	createLabel?: string;
	onChange?: (value: string) => void;
} & Omit<CreatableProps, 'onChange'>;

export type Option = { label: string; value: string };

const CreatableSelect: React.FC<Props> = ({
	inputId,
	label,
	options: defaultOptions,
	value,
	createLabel = 'Voeg toe',
	onCreateOption,
	onChange,
	...props
}) => {
	const [options, setOptions] = useState<CreatableProps['options']>(defaultOptions);
	const [selected, setSelected] = useState<CreatableProps['value']>(value);

	useEffect(() => {
		setOptions(defaultOptions);
	}, [defaultOptions]);

	return (
		<>
			{label && <StyledLabel htmlFor={inputId} label={label} />}
			<Creatable
				styles={amsStyles}
				value={selected}
				inputId={inputId}
				openMenuOnFocus
				formatCreateLabel={(value: string) => `${createLabel} "${value}"`}
				options={options}
				onChange={(option) => {
					setSelected(option);
					onChange && onChange((option as Option)?.value ?? '');
				}}
				onCreateOption={(inputValue) => {
					const newOption = { value: inputValue, label: inputValue };
					setOptions((prevState) => [newOption, ...(prevState ?? [])]);
					setSelected(newOption);
					onCreateOption && onCreateOption(inputValue);
					onChange && onChange(inputValue);
				}}
				{...props}
			/>
		</>
	);
};

export default CreatableSelect;
