import React from 'react';

type Props = {
	url: string;
}

const DocumentViewer: React.FC<Props> = ({ url }: Props) => (
	<h1>{url}</h1>
);

export default DocumentViewer;
