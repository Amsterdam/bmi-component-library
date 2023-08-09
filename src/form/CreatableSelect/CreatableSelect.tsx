import type { ComponentProps, FC } from 'react';
import Creatable from 'react-select/creatable';
import { getSelectStyle, StyledLabel } from './ReactSelectStyles';

type CreatableProps = ComponentProps<typeof Creatable>;
export type Props = {
	label?: string;
	createLabel?: string;
	error?: boolean;
	zIndexMenu?: number;
} & CreatableProps;

const CreatableSelect: FC<Props> = ({ inputId, label, options, value, error, createLabel = 'Voeg toe', ...props }) => {
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
				menuPlacement="auto"
				{...props}
			/>
		</>
	);
};

export default CreatableSelect;
