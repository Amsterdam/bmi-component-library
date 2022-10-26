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
					<ModalBlockStyle>
						<Heading forwardedAs="h4">Onjuiste of ontbrekende gegevens?</Heading>
						<Paragraph>
							Geef aan welke gegevens onjuist zijn of ontbreken. Ook als je weet wat het wel moet zijn. We
							horen het graag.
						</Paragraph>
					</ModalBlockStyle>
					<Divider gutter />
					<ModalBlockStyle>
						<Heading forwardedAs="h4">Vraag of een klacht?</Heading>
						<Paragraph>
							Als iets op deze pagina niet goed werkt, onduidelijk is of vragen oproept, geef het aan ons
							door.
						</Paragraph>
					</ModalBlockStyle>
				</Modal.Content>
				<Modal.Actions>
					<Modal.Actions.Left>
						<Button variant="primaryInverted" onClick={() => setModalVisibility(false)}>
							Annuleren
						</Button>
					</Modal.Actions.Left>
					<Modal.Actions.Right>
						<Button variant="primaryInverted">Vorige</Button>
						<Button variant="secondary">Volgende</Button>
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
