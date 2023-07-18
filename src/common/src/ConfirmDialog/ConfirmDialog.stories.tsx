import type { Meta, StoryFn } from '@storybook/react';
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
		background-color: rgba(0 70 153 20%);
		padding: 8px 32px 8px 8px;

		dt,
		dd {
			display: table-cell;
			vertical-align: middle;
			padding: 0 24px 0 0;
			color: #000;
		}
	}
`;

const meta: Meta<typeof ConfirmDialog> = {
	title: 'Confirm Dialog',
};

const TemplateReactNodeMessage: StoryFn<typeof ConfirmDialog> = (args) => (
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
		<ConfirmDialog {...args} />
	</>
);

const Template: StoryFn<typeof ConfirmDialog> = (args) => (
	<>
		<button onClick={() => confirm(props)}>Verwijder</button>
		<ConfirmDialog {...args} />
	</>
);

const TemplateCustomSubject: StoryFn<typeof ConfirmDialog> = () => (
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
);

export const Default = Template.bind({});

export const WithCloseButton = Template.bind({});
WithCloseButton.args = {
	hideCloseButton: false,
};

export const DialogXs = Template.bind({});
DialogXs.args = {
	size: 'xs',
};
DialogXs.storyName = 'Dialog XS';

export const NoBackdrop = Template.bind({});
NoBackdrop.args = {
	backdropOpacity: 1,
};

export const WithCustomSubject = TemplateCustomSubject.bind({});
WithCustomSubject.storyName = 'With custom subject';

export const WithReactNodeAsMessage = TemplateReactNodeMessage.bind({});

WithReactNodeAsMessage.storyName = 'With React node as message';

export default meta;
