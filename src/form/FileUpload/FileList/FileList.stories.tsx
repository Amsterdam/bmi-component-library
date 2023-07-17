import { StoryFn, Meta } from '@storybook/react';

import { files, filesWithRejection } from './__stubs__/files';

import FileList from './FileList';
import { generateDisabledControls } from '../../../utils/storybook';
import type { CustomFileOrRejection } from '../hooks';

const disabledControls = generateDisabledControls(['files']);

const meta: Meta<typeof FileList> = {
	title: 'common/FileList',
	component: FileList,
	args: {
		title: 'Bestand',
		removeLabel: 'Wissen',
		cancelLabel: 'Annuleren',
		fileUploadErrorLabel: 'dit bestand kan niet worden geüpload',
		fileUploadInProgressLabel: '',
		files: files as CustomFileOrRejection[],
	},
	argTypes: {
		...disabledControls,
	},
};

const Template: StoryFn<typeof FileList> = (props) => <FileList {...props} />;

export const Default = Template.bind({});

export const WithFilesInProgress = Template.bind({});
WithFilesInProgress.args = {
	files: files.map((file) => ({ ...file, progress: Math.floor(Math.random() * 70) })) as CustomFileOrRejection[],
};

export const WithRejectedFiles = Template.bind({});
WithRejectedFiles.args = {
	files: filesWithRejection,
};

export default meta;
