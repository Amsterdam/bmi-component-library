//@ts-nocheck
import React from 'react';
import ConfirmDialog from './ConfirmDialog';

export default {
	title: 'common/ConfirmDialog',
	component: ConfirmDialog,
};

const Template = (args) => <ConfirmDialog {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: 'Waarschuwing',
	message: 'Weet u het zeker?',
	textCancelButton: 'Nee',
	textConfirmButton: 'Ja',
};
