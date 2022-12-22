import React from 'react';
import { components, DropdownIndicatorProps } from 'react-select';
import { DropdownIndicatorStyle } from './SelectStyles';

const DropdownIndicator: React.FC<DropdownIndicatorProps> = (props) => {
	return (
		<components.DropdownIndicator {...props}>
			<DropdownIndicatorStyle />
		</components.DropdownIndicator>
	);
};

export default DropdownIndicator;
