import { StoryFn, Meta } from '@storybook/react';

import { files } from './FileList/__stubs__/files';
import FileUpload from './FileUpload';
import { CustomFileOrRejection } from './hooks';

const url = 'http://localhost:6006/upload';

const meta: Meta<typeof FileUpload> = {
	title: 'form/FileUpload',
	component: FileUpload,
	args: {
		getPostUrl: async () => url, // fakeapi
		placeholder: 'Sleep de bestanden in dit vlak. U kunt ook ',
		droppingLabel: 'bestanden geselecteerd',
		selectFilesLabel: 'bestanden of foto’s selecteren of een foto maken',
		removeLabel: 'Wissen',
		cancelLabel: 'Annuleren',
		fileUploadErrorLabel: 'dit bestand kan niet worden geüpload',
		fileUploadInProgressLabel: '',
		fileListTitle: 'Bestand',
		options: { noClick: true, noKeyboard: true },
		getHeaders: async () => ({}),
	},
	parameters: {
		mockData: [
			{
				url: url,
				method: 'POST',
				status: 200,
				response: {},
			},
		],
	},
};

const Template: StoryFn<typeof FileUpload> = (args) => {
	return <FileUpload {...args} />;
};

export const Default = Template.bind({});

export const SingleFile = Template.bind({});
SingleFile.args = {
	options: { noClick: true, noKeyboard: true, maxFiles: 1 },
	placeholder: 'Sleep een bestand in dit vlak of',
	selectFilesLabel: 'een bestand of foto selecteren of een foto maken',
};

export const Prepopulated = Template.bind({});
Prepopulated.args = {
	options: { noClick: true, noKeyboard: true, accept: { 'plain/txt': ['.txt'] } },
	placeholder: 'Sleep een .txt bestand in dit vlak of',
	storedFiles: files.map((file, idX) => ({ ...file, tmpId: idX })) as unknown as CustomFileOrRejection[],
};

export const RemoveCompleted = Template.bind({});
RemoveCompleted.args = {
	removeCompletedFromList: true,
};

export default meta;
