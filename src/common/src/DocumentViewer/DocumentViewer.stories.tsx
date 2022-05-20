import React from 'react';
import { Story } from '@storybook/react';
import DocumentViewer from './DocumentViewer';

export default {
	title: 'common/DocumentViewer',
	component: DocumentViewer,
};

export const NotFound: Story = () => {
	return <DocumentViewer currentFilename="notfound.txt" uri="assets/notfound.txt" />;
};

export const NoViewerAvailable: Story = () => {
	return <DocumentViewer currentFilename="example.xlsx" uri="assets/example.xlsx" />;
};

export const Image: Story = () => {
	return <DocumentViewer currentFilename="example.png" uri="assets/example.png" />;
};

export const PDF: Story = () => {
	return <DocumentViewer currentFilename="example.pdf" uri="assets/example.pdf" />;
};
