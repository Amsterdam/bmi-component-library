import React, { useState } from 'react';
import ConfirmDialog from './ConfirmDialog';
import { Story } from '@storybook/react';

export default {
	title: 'common/ConfirmDialog',
	component: ConfirmDialog,
};

const Template: Story<React.ComponentProps<typeof ConfirmDialog>> = (args) => {
	const [isModalVisible, setModalVisibility] = useState(false);

	function renderConFirmDialog() {
		return <ConfirmDialog {...args} isModalVisible={isModalVisible} setModalVisibility={setModalVisibility} />;
	}
	return (
		<>
			<button onClick={() => setModalVisibility(true)}>Verwijder</button>
			{isModalVisible && renderConFirmDialog()}
		</>
	);
};

export const Default = Template.bind({});
Default.args = {
	title: 'Waarschuwing',
	message: 'Weet u het zeker?',
	textCancelButton: 'Nee',
	textConfirmButton: 'Ja',
	onCancel: () => {
		console.log('Nee');
	},
	onConfirm: () => {
		console.log('Ja');
	},
};
