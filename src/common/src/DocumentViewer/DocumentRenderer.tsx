import React from 'react';
import { Alert, Link, Paragraph } from '@amsterdam/asc-ui';

type Props = {
	uri: string;
	contentType: string;
};

const contentTypes = [
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
	if (contentTypes.indexOf(contentType) > -1) {
		return <img src={uri} alt="Afbeelding" />;
	}

	return (
		<Alert level="warning" outline>
			<Paragraph>Document kan niet weergegeven worden in de browser.</Paragraph>
			<Link href={uri} icon="download">
				Download
			</Link>
		</Alert>
	);
};

export default DocumentRenderer;
