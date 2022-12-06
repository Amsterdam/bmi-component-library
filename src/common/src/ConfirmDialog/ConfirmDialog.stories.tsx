import React from 'react';
import { storiesOf } from '@storybook/react';
import { BehaviorSubject } from 'rxjs';
import styled from 'styled-components';

import ConfirmDialog, { confirm, initialState, IState } from './ConfirmDialog';

const props: IState = {
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

const ReactNodeExample = styled.div`
	font-size: 18px;
	line-height: 28px;

	p {
		margin-top: 0;
	}

	dl {
		background-color: rgba(0, 70, 153, 0.2);
		padding: 8px 32px 8px 8px;

		dt,
		dd {
			display: table-cell;
			vertical-align: middle;
			padding: 0 24px 0 0;
			color: #000000;
		}
	}
`;

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
	))
	.add('With React node as message', () => {
		return (
			<>
				<button
					onClick={() =>
						confirm({
							...props,
							title: 'Element verwijderen',
							message: (
								<ReactNodeExample>
									<p>Weet u zeker dat u dit element wilt verwijderen?</p>
									<dl>
										<dt>111</dt>
										<dd>Bebording/bewegwijzering (statisch)</dd>
									</dl>
								</ReactNodeExample>
							),
							textConfirmButton: 'Verwijder',
							textCancelButton: 'Annuleer',
						})
					}
				>
					Verwijder
				</button>
				<ConfirmDialog hideCloseButton={false} />
			</>
		);
	});
