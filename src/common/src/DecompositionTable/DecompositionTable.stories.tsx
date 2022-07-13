import React from 'react';
import { Story } from '@storybook/react';
import DecompositionTable from './DecompositionTable';
import { documents } from '../DecompositionTable/__stubs__/documents';

export default {
	title: 'common/DecompositionTable',
	component: DecompositionTable,
};

const Template: Story<React.ComponentProps<typeof DecompositionTable>> = (args) => {
    return (
        <DecompositionTable />
    );
}

export const Default = Template.bind({});
Default.args = {
	rows: documents
};