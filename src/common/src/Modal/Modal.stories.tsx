import React from 'react';
import { Button, Divider, Heading, Paragraph } from '@amsterdam/asc-ui';
import { Story } from '@storybook/react';
import Modal from './Modal';
import { ModalBlockStyle } from './ModalStyles';

export default {
	title: 'common/Modal',
	component: Modal,
};

const Template: Story<React.ComponentProps<typeof Modal>> = (args) => {
	const [isModalVisible, setModalVisibility] = React.useState<boolean>(false);

	const renderModal = () => {
		return (
			<Modal {...args} id="asset-view" open={isModalVisible} onClose={() => setModalVisibility(false)}>
				<Modal.TopBar hideCloseButton={false}>Afgerond - Assetnaam</Modal.TopBar>
				<Modal.Content>
					<ModalBlockStyle>
						<Heading forwardedAs="h4">Onjuiste of ontbrekende gegevens?</Heading>
						<Paragraph>
							Geef aan welke gegevens onjuist zijn of ontbreken. Ook als je weet wat het wel moet zijn. We horen het
							graag.
						</Paragraph>
					</ModalBlockStyle>
					<Divider gutter />
					<ModalBlockStyle>
						<Heading forwardedAs="h4">Vraag of een klacht?</Heading>
						<Paragraph>
							Als iets op deze pagina niet goed werkt, onduidelijk is of vragen oproept, geef het aan ons door.
						</Paragraph>
					</ModalBlockStyle>
				</Modal.Content>
				<Modal.Actions>
					<Button style={{ marginRight: '8px' }} onClick={() => setModalVisibility(false)}>
						Annuleren
					</Button>
					<Button variant="primary">Opslaan</Button>
				</Modal.Actions>
			</Modal>
		);
	};

	return (
		<>
			<Button onClick={() => setModalVisibility(true)}>Open modal</Button>
			{isModalVisible && renderModal()}
		</>
	);
};

export const Default = Template.bind({});
Default.args = {
	disablePortal: false,
};
