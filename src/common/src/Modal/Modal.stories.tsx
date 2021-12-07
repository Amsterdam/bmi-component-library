import React from 'react';
import { Button, Divider, Heading, Paragraph } from '@amsterdam/asc-ui';
import { Story } from '@storybook/react';
import Modal, { IModal } from './Modal';
import { ModalBlockStyle } from './ModalStyles';

export default {
	title: 'common/Modal',
	component: Modal as IModal,
	argTypes: {
		size: {
			options: ['sm', 'md', 'lg', 'xl'],
			control: { type: 'radio' },
		},
	},
};

const Template: Story<React.ComponentProps<typeof Modal>> = (args) => {
	const [isModalVisible, setModalVisibility] = React.useState<boolean>(false);

	const renderModal = () => {
		return (
			<Modal {...args} id="asset-view" open={isModalVisible}>
				<Modal.TopBar hideCloseButton={false} onCloseButton={() => setModalVisibility(false)}>
					<Heading styleAs="h4" as="h2">
						Afgerond - Assetnaam
					</Heading>
				</Modal.TopBar>
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
						<Button variant="primaryInverted" style={{ marginRight: '8px' }}>
							Vorige
						</Button>
						<Button variant="secondary" taskflow>
							Volgende
						</Button>
					</Modal.Actions.Right>
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
Default.args = {};
