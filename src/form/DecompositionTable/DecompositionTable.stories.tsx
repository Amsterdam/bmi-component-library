import React from 'react';
import { ComponentStory } from '@storybook/react';
import DecompositionTable from './DecompositionTable';
import { elements, manifestations } from '../DecompositionTable/__stubs__/documents';

export default {
	title: 'form/DecompositionTable',
	component: DecompositionTable
};

const Template: ComponentStory<typeof DecompositionTable> = (args) => {
	return (
		<DecompositionTable {...args} />
	);
}

export const Default = Template.bind({});

Default.args = {
	elements: elements,
	manifestations: manifestations
};