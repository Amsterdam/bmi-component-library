import React from 'react';
import { Story } from '@storybook/react';
import FileList from './FileList';
import { CustomFile } from '../hooks';

export default {
	title: 'common/FileList',
	component: FileList,
};

const Template: Story<React.ComponentProps<typeof FileList>> = (args) => <FileList {...args} />;

const args = {
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
	] as any,
	removeLabel: 'Wissen',
	cancelLabel: 'Annuleren',
	onCancel: (file: CustomFile) => console.log('Canceled upload'),
	onFileRemove: (file: CustomFile) => console.log(file),
	fileUploadErrorLabel: 'dit bestand kan niet worden geüpload',
	fileUploadInProgressLabel: 'wordt geupload',
};

export const Default = Template.bind({});
Default.args = args;

export const WithFilesInProgress = Template.bind({});
WithFilesInProgress.args = {
	...args,
	files: [
		{
			lastModified: 1623407907404,
			name: 'Stakeholderanalyse.pdf',
			path: 'Stakeholderanalyse.pdf',
			size: 119660,
			type: 'image/png',
			webkitRelativePath: '',
			progress: 50,
		},
		{
			lastModified: 1623407907304,
			name: 'Migratierapport.pdf',
			path: 'Migratierapport.pdf',
			size: 129654,
			type: 'image/png',
			webkitRelativePath: '',
			progress: 20,
		},
	] as any,
};

export const WithRejectedFiles = Template.bind({});
WithRejectedFiles.args = {
	...args,
	files: [
		{
			lastModified: 1623407907404,
			name: 'Stakeholderanalyse.pdf',
			path: 'Stakeholderanalyse.pdf',
			size: 119660,
			type: 'image/png',
			webkitRelativePath: '',
			progress: 50,
		},
		{
			errors: { message: '__ERROR__', code: 'file-too-large' },
			file: {
				lastModified: 1623407907404,
				name: 'Faalrapport.pdf',
				path: 'Faalrapport.pdf',
				size: 119660,
				type: 'image/png',
				webkitRelativePath: '',
			},
		},
	] as any,
};
