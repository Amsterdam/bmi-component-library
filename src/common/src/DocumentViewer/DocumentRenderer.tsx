import React from 'react';
import { DocumentState } from './DocumentViewer';
import {Alert, Link, Paragraph} from "@amsterdam/asc-ui";

type Props = {
	document: DocumentState;
}

const contentTypes = ["jpg", "jpeg", "image/jpg", "image/jpeg", "png", "image/png", "bmp", "image/bmp", "tif", "tiff", "image/tif", "image/tiff"];

const DocumentRenderer: React.FC<Props> = ({ document }) => {
	if (contentTypes.indexOf(document.contentType) > -1) {
		return <img src={document.uri} alt="Afbeelding" />
	}

	return (
		<Alert level="warning" outline>
			<Paragraph>Document kan niet weergegeven worden in de browser.</Paragraph>
			<Link href={document.uri} icon="download">Download</Link>
		</Alert>
	);
}

export default DocumentRenderer;
