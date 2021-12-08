import React from 'react';
import { Story } from '@storybook/react';
import DocumentViewer from './DocumentViewer';

export default {
	title: 'common/DocumentViewer',
	component: DocumentViewer,
};

export const NotFound: Story = () => {
	return <DocumentViewer url="assets/notfound" />
}

