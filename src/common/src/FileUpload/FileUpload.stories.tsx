import React from 'react';
import { Story } from '@storybook/react';
import FileUpload from './FileUpload';

export default {
	title: 'common/FileUpload',
	component: FileUpload,
};

const Template: Story<React.ComponentProps<typeof FileUpload>> = (args) => (
	<div style={{ width: '620px' }}>
		<FileUpload {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	postUrl: 'api/endpoint',
	placeholder: 'Sleep de bestanden in dit vlak of',
	droppingLabel: 'bestanden geselecteerd',
	selectFilesLabel: 'selecteer bestanden',
	removeLabel: 'Wissen',
	cancelLabel: 'Annuleren',
	fileUploadErrorLabel: 'dit bestand kan niet worden geüpload',
	fileUploadInProgressLabel: 'wordt geupload',
	options: {
		noClick: true,
		noKeyboard: true,
		accept: 'image/png',
	},
};
