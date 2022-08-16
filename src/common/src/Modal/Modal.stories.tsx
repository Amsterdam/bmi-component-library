import React from 'react';
import { Button, Divider, Heading, Paragraph } from '@amsterdam/asc-ui';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal, { IModal } from './Modal';
import { ModalBlockStyle } from './ModalStyles';
import { generateDisabledControls, DISABLED_CONTROL } from '../../../utils/storybook';

const disabledControls = generateDisabledControls(['blurredNodeSelector', 'element', 'children', 'blurredNode']);

export default {
	title: 'common/Modal',
	component: Modal as IModal,
	argTypes: {
		backdropOpacity: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
		...disabledControls,
	},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
	const [isModalVisible, setModalVisibility] = React.useState<boolean>(true);

	return (
		<>
			<Button onClick={() => setModalVisibility(true)}>Open modal</Button>
			<Modal
				{...args}
				open={isModalVisible}
				onClose={() => {
					if (args.closeOnBackdropClick) {
						setModalVisibility(false);
					}
				}}
				id="asset-view"
			>
				<Modal.TopBar onCloseButton={() => setModalVisibility(false)}>Afgerond - Assetnaam</Modal.TopBar>
				<Modal.Content>
					<h1>test</h1>
					<h2>test</h2>
					<h3>test</h3>
				</Modal.Content>
				<Modal.Actions>
					<Modal.Actions.Left>
						<Button variant="primaryInverted" onClick={() => setModalVisibility(false)}>
							Annuleren
						</Button>
					</Modal.Actions.Left>
					<Modal.Actions.Right>
						<Button variant="primaryInverted" style={{ marginRight: '8px' }}>
							Vorige
						</Button>
						<Button variant="secondary" taskflow style={{ marginRight: '15px' }}>
							Volgende
						</Button>
					</Modal.Actions.Right>
				</Modal.Actions>
			</Modal>
		</>
	);
};

export const Default = Template.bind({});
Default.argTypes = {
	open: DISABLED_CONTROL,
};
