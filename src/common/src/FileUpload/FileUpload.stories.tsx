import React from 'react';
import { Story } from '@storybook/react';
import FileUpload, { Props } from './FileUpload';
import { CustomFileOrRejection } from '~/common/src/FileUpload/hooks';

export default {
	title: 'common/FileUpload',
	component: FileUpload,
};

const defaultProps: Props = {
	getPostUrl: () => Promise.resolve('https://v2.convertapi.com/upload'), //fakeapi
	placeholder: 'Sleep de bestanden in dit vlak of',
	droppingLabel: 'bestanden geselecteerd',
	selectFilesLabel: 'selecteer bestanden',
	removeLabel: 'Wissen',
	cancelLabel: 'Annuleren',
	fileUploadErrorLabel: 'dit bestand kan niet worden geüpload',
	fileUploadInProgressLabel: 'wordt geupload',
	options: { noClick: true, noKeyboard: true },
	getHeaders: async () => {
		return Promise.resolve({});
	},
	onFileSuccess: (file) => {
		console.log(file);
	},
	onFileRemove: (file) => console.log('remove file from redux store of database', file),
};

const Template: Story<Props> = (args) => {
	return <FileUpload {...args} />;
};

export const Default = Template.bind({});
Default.args = defaultProps;

const storedFiles = [
	new File(['hello'], 'hello.png', { type: 'image/png' }),
	new File(['there'], 'there.png', { type: 'image/png' }),
].map((file, idx) => Object.assign(file, { tmpId: idx })) as CustomFileOrRejection[];

export const Prepopulated: Story = () => (
	<FileUpload
		{...defaultProps}
		options={{ noClick: true, noKeyboard: true, accept: 'image/png' }}
		placeholder="Sleep de PNG bestanden in dit vlak of"
		storedFiles={storedFiles}
	/>
);
Prepopulated.storyName = 'Pre-populated FileList';

export const RemoveCompleted: Story = () => <FileUpload {...defaultProps} removeCompletedFromList />;
RemoveCompleted.storyName = 'Remove completed from FileList';
