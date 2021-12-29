import React from 'react';
import { storiesOf } from '@storybook/react';
import ConfirmDialog, { confirm } from './ConfirmDialog';

export default {
	title: 'common/ConfirmDialog',
	component: ConfirmDialog,
};

const props = {
	title: 'Waarschuwing',
	message: 'Weet u zeker dat u dit document definitief wilt verwijderen?',
	onCancel: () => {
		console.log('Nee');
	},
	onConfirm: () => {
		console.log('Ja');
	},
	onCloseButton: () => {
		console.log('Close');
	},
};

storiesOf('Dialog', module)
	.add('Default', () => (
		<>
			<button onClick={() => confirm(props)}>Verwijder</button>
			<ConfirmDialog />
		</>
	))
	.add('With Close Button', () => (
		<>
			<button onClick={() => confirm(props)}>Verwijder</button>
			<ConfirmDialog hideCloseButton={false}/>
		</>
	))	.add('Dialog XS', () => (
	<>
		<button onClick={() => confirm(props)}>Verwijder</button>
		<ConfirmDialog size={'xs'}/>
	</>
));
