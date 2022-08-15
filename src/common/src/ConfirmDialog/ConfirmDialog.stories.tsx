import React from 'react';
import { storiesOf } from '@storybook/react';
import { BehaviorSubject } from 'rxjs';
import ConfirmDialog, { confirm, initialState, IState } from './ConfirmDialog';

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

const customSubject = new BehaviorSubject<IState>(initialState);

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
	))
	.add('With custom subject', () => (
		<>
			<button onClick={() => confirm(props)}>Verwijder</button>
			<ConfirmDialog />
			<button
				onClick={() =>
					confirm(
						{ ...props, message: 'This message comes from a BehaviorSubject with an isolated state' },
						customSubject,
					)
				}
			>
				Verwijder
			</button>
			<ConfirmDialog store={customSubject} />
		</>
	));
