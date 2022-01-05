import React from 'react';
import { Story } from '@storybook/react';
import DocumentViewer from './DocumentViewer';

export default {
	title: 'common/DocumentViewer',
	component: DocumentViewer,
};

export const NotFound: Story = () => {
	return <DocumentViewer uri="assets/notfound.txt" />;
};

export const NoViewerAvailable: Story = () => {
	return <DocumentViewer uri="assets/example.xlsx" />;
};

export const Image: Story = () => {
	return <DocumentViewer uri="assets/example.png" />;
};

export const PDF: Story = () => {
	return <DocumentViewer uri="assets/example.pdf" />;
};