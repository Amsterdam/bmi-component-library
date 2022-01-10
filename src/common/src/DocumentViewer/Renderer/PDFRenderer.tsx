import React from 'react';
import { Alert, Link, Paragraph } from '@amsterdam/asc-ui';
import { PDFRendererStyle } from './PDFRendererStyles';

type Props = {
	uri: string;
};

const PDFRenderer: React.FC<Props> = ({ uri }) => (
	<PDFRendererStyle data={uri} role="document">
		<Alert level="warning" outline>
			<Paragraph>Document kan niet weergegeven worden in de browser.</Paragraph>
			<Link href={uri} icon="download">
				Download
			</Link>
		</Alert>
	</PDFRendererStyle>
);

export default PDFRenderer;
