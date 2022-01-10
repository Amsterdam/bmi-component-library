import React from 'react';
import ImageRenderer from './ImageRenderer';
import PDFRenderer from './PDFRenderer';
import DownloadRenderer from './DownloadRenderer';

type Props = {
	uri: string;
	contentType: ContentTypes | string;
};

export enum ImageContentTypes {
	'jpg',
	'jpeg',
	'image/jpg',
	'image/jpeg',
	'png',
	'image/png',
	'bmp',
	'image/bmp',
	'tif',
	'tiff',
	'image/tif',
	'image/tiff',
}

export enum PDFContentTypes {
	'application/pdf',
	'pdf',
}

type ContentTypes = ImageContentTypes | PDFContentTypes;

const DocumentRenderer: React.FC<Props> = ({ uri, contentType }) => {
	if (contentType in ImageContentTypes) return <ImageRenderer uri={uri} />;

	if (contentType in PDFContentTypes) return <PDFRenderer uri={uri} />;

	return <DownloadRenderer uri={uri} />;
};

export default DocumentRenderer;
