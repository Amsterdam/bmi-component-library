import React from 'react';
import { Story } from '@storybook/react';
import FileList from './FileList';

export default {
	title: 'common/FileList',
	component: FileList,
};

const Template: Story<React.ComponentProps<typeof FileList>> = (args) => <FileList {...args} />;

export const Default = Template.bind({});
Default.args = {
	files: [
		{
			lastModified: 1623407907404,
			name: 'Stakeholderanalyse.pdf',
			path: 'Stakeholderanalyse.pdf',
			size: 119660,
			type: 'image/png',
			webkitRelativePath: '',
		},
		{
			lastModified: 1623407907304,
			name: 'Migratierapport.pdf',
			path: 'Migratierapport.pdf',
			size: 129654,
			type: 'image/png',
			webkitRelativePath: '',
		},
	],
	removeLabel: 'Wissen',
	cancelLabel: 'Annuleren',
	onCancel: () => console.log('Canceled upload'),
	onFileRemove: (file: any) => console.log(file),
	fileUploadErrorLabel: 'dit bestand kan niet worden geüpload',
	fileUploadInProgressLabel: 'wordt geupload',
};
