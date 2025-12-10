import type { Meta, StoryFn } from '@storybook/react';
import type { ComponentProps } from 'react';

import { files, filesWithRejection } from './__stubs__/files';

import FileList from './FileList';
import { generateDisabledControls } from '@utils/storybook';
import type { CustomFileOrRejection } from '@form/FileUpload/hooks';

type FileListProps = ComponentProps<typeof FileList>;
const disabledControls = generateDisabledControls<FileListProps>(['files']);

const meta: Meta<FileListProps> = {
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

const Template: StoryFn<FileListProps> = (props) => <FileList {...props} />;

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
