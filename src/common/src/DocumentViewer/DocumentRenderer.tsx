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

const DocumentRenderer: React.FC<Props> = ({ uri, contentType }) => {
	if (imageContentTypes.indexOf(contentType) > -1) {
		return (
			<DocumentRendererStyle data-testid="document-renderer">
				<img src={uri} alt="Afbeelding" />
			</DocumentRendererStyle>
		);
	}

	return (
		<DocumentRendererStyle data-testid="document-renderer">
			<Alert level="warning" outline>
				<Paragraph>Document kan niet weergegeven worden in de browser.</Paragraph>
				<Link href={uri} icon="download">
					Download
				</Link>
			</Alert>
		</DocumentRendererStyle>
	);
};

export default DocumentRenderer;
