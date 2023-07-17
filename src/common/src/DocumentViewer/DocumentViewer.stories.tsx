import { StoryFn } from '@storybook/react';
import DocumentViewer from './DocumentViewer';

export default {
	title: 'common/DocumentViewer',
	component: DocumentViewer,
};

export const NotFound: StoryFn = () => {
	return <DocumentViewer currentFilename="notfound.txt" uri="assets/notfound.txt" />;
};

export const NoViewerAvailable: StoryFn = () => {
	return <DocumentViewer currentFilename="example.xlsx" uri="assets/example.xlsx" />;
};

export const Image: StoryFn = () => {
	return <DocumentViewer currentFilename="example.png" uri="assets/example.png" />;
};

export const PDF: StoryFn = () => {
	return <DocumentViewer currentFilename="example.pdf" uri="assets/example.pdf" />;
};
