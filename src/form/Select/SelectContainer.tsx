import React from 'react';
import { components, ContainerProps } from 'react-select';

const SelectContainer: React.FC<ContainerProps<any>> = (commonProps) => {
	const selectProps_ = commonProps.selectProps as unknown &
		typeof commonProps.selectProps & { 'data-testid'?: string };
	const innerPropsAddition = selectProps_?.['data-testid'] ? { 'data-testid': selectProps_['data-testid'] } : {};

	return (
		<components.SelectContainer
			{...commonProps}
			innerProps={Object.assign({}, commonProps.innerProps, innerPropsAddition)}
		/>
	);
};

export default SelectContainer;
