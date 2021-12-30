import React from 'react';
import { storiesOf } from '@storybook/react';
import ConfirmDialog, { confirm } from './ConfirmDialog';

const props = {
	title: 'Waarschuwing',
	message: 'Weet u zeker dat u dit document definitief wilt verwijderen?',
	onCancel: () => {
		console.log('Nee');
	},
	onConfirm: () => {
		console.log('Ja');
	},
	onClose: () => {
		console.log('sluiten');
	},
};

storiesOf('Confirm Dialog', module)
	.add('Default', () => (
		<>
			<button onClick={() => confirm(props)}>Verwijder</button>
			<ConfirmDialog />
		</>
	))
	.add('With Close Button', () => (
		<>
			<button onClick={() => confirm(props)}>Verwijder</button>
			<ConfirmDialog hideCloseButton={false} />
		</>
	))
	.add('Dialog XS', () => (
		<>
			<button onClick={() => confirm(props)}>Verwijder</button>
			<ConfirmDialog size={'xs'} />
		</>
	))
	.add('No Backdrop', () => (
		<>
			<button onClick={() => confirm(props)}>Verwijder</button>
			<ConfirmDialog backdropOpacity={1} />
		</>
	));
