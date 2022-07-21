import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DecompositionTable from './DecompositionTable';
import { decomposition } from '../DecompositionTable/__stubs__/documents';

export default {
	title: 'form/DecompositionTable',
	component: DecompositionTable,
} as ComponentMeta<typeof DecompositionTable>;

const Template: ComponentStory<typeof DecompositionTable> = (args) => <DecompositionTable {...args} />;

export const Default = Template.bind({});

Default.args = {
	decomposition,
};
