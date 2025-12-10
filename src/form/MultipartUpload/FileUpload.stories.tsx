import type { Meta, StoryFn } from '@storybook/react';
import { FileUpload, FileUploadProps } from '@form/MultipartUpload/FileUpload';

const meta: Meta<FileUploadProps> = {
	title: 'form/MultipartUpload',
	component: FileUpload,
	args: {
		name: 'single',
		limit: 2048,
	},
};

const Template: StoryFn<typeof FileUpload> = (args) => <FileUpload {...args} />;

export const Default = Template.bind({});

export default meta;
