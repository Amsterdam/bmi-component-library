import React from 'react';
import ConfirmDialog, { confirm } from './ConfirmDialog';
import { Story } from '@storybook/react';

export default {
	title: 'common/ConfirmDialog',
	component: ConfirmDialog,
};

const props = {
	title: 'Waarschuwing',
	message: 'Weet u zeker dat u dit document definitief wilt verwijderen?',
	textCancelButton: 'Nee',
	textConfirmButton: 'Ja',
	onCancel: () => {
		console.log('Nee');
	},
	onConfirm: () => {
		console.log('Ja');
	},
};

const Template: Story<React.ComponentProps<typeof ConfirmDialog>> = () => {
	return (
		<>
			<button onClick={() => confirm(props)}>Verwijder</button>
			<ConfirmDialog />
		</>
	);
};

export const Default = Template.bind({});
Default.args = {};
