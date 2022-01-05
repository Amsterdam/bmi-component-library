import React from 'react';
import { Alert, Link, Paragraph } from '@amsterdam/asc-ui';
import { DocumentRendererStyle } from './DocumentRendererStyles';

type Props = {
	uri: string;
	contentType: string;
};

export const imageContentTypes: string[] = [
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
];

export const pdfContentTypes: string[] = ['application/pdf', 'pdf'];

const DocumentRenderer: React.FC<Props> = ({ uri, contentType }) => {
	if (imageContentTypes.indexOf(contentType) > -1) {
		return renderImage(uri);
	}

	if (pdfContentTypes.indexOf(contentType) > -1) {
		return renderPDF(uri, contentType);
	}

	return <DocumentRendererStyle data-testid="document-renderer">{renderDownloadDocument(uri)}</DocumentRendererStyle>;
};

const renderImage = (uri: string) => (
	<DocumentRendererStyle data-testid="document-renderer">
		<img src={uri} alt="Afbeelding" />
	</DocumentRendererStyle>
);

const renderPDF = (uri: string, contentType: string) => (
	<DocumentRendererStyle data-testid="document-renderer">
		<object data={uri} type={contentType} role="document">
			{renderDownloadDocument(uri)}
		</object>
	</DocumentRendererStyle>
);

const renderDownloadDocument = (uri: string) => (
	<Alert level="warning" outline>
		<Paragraph>Document kan niet weergegeven worden in de browser.</Paragraph>
		<Link href={uri} icon="download">
			Download
		</Link>
	</Alert>
);

export default DocumentRenderer;
