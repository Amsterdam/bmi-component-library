import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { files, filesWithRejection } from './__stubs__/files';

import FileList from './FileList';
import { generateDisabledControls } from '../../../utils/storybook';

const disabledControls = generateDisabledControls(['files']);

export default {
	title: 'common/FileList',
	component: FileList,
	args: {
		title: 'Bestand',
		removeLabel: 'Wissen',
		cancelLabel: 'Annuleren',
		fileUploadErrorLabel: 'dit bestand kan niet worden geüpload',
		fileUploadInProgressLabel: '',
		files: files,
		onFileNameClick: undefined /* prevent the default action handler of Storybook to be added */,
	},
	argTypes: {
		...disabledControls,
	},
} as ComponentMeta<typeof FileList>;

const Template: ComponentStory<typeof FileList> = (props) => <FileList {...props} />;

export const Default = Template.bind({});

export const WithFilesInProgress = Template.bind({});
WithFilesInProgress.args = {
	files: files.map((file) => ({ ...file, progress: Math.floor(Math.random() * 70) })),
};

export const WithRejectedFiles = Template.bind({});
WithRejectedFiles.args = {
	files: filesWithRejection,
};

export const WithFileNameClickListener = Template.bind({});
WithFileNameClickListener.args = {
	onFileNameClick: (file) => console.log(`You clicked on ${file.name}`),
};
