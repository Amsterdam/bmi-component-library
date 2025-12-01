import type { Meta, StoryFn } from '@storybook/react';
import { FileUpload } from './FileUpload';

const meta: Meta<typeof FileUpload> = {
	title: 'form/MultipartUpload',
	component: FileUpload,
	args: {},
};

const Template: StoryFn<typeof FileUpload> = (args) => <FileUpload {...args} />;

export const Default = Template.bind({});

export default meta;
