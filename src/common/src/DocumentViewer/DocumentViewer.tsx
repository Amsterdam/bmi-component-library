import React, { useEffect, useState } from 'react';
import { Alert, Heading, themeColor } from '@amsterdam/asc-ui';
import { DocumentViewerStyle, SpinnerStyle } from './DocumentViewerStyles';
import DocumentRenderer from './Renderer/DocumentRenderer';

type Props = {
	uri: string;
	onFailure?: (e: Error) => void;
};

export type DocumentState = {
	loading: boolean;
	filename?: string;
	error?: string;
	contentType?: string;
};

const DocumentViewer: React.FC<Props> = ({ uri, onFailure }: Props) => {
	const [documentState, setDocumentState] = useState<DocumentState>({ loading: true });
	const { loading, filename, error, contentType } = documentState;

	const updateDocumentState = (documentState: Partial<DocumentState>) => {
		setDocumentState((prevState) => ({
			...prevState,
			...documentState,
		}));
	};

	useEffect(() => {
		updateDocumentState({ loading: true, error: undefined, contentType: undefined });

		fetch(uri, { method: 'GET' })
			.then((response) => {
				if (!response.ok)
					throw new Error(response.status === 404 ? 'Document niet gevonden.' : 'Fout bij het ophalen.');

				const [firstContentType] = response.headers.get('content-type')?.split(';') || [];
				if (!firstContentType) throw new Error('Fout bij het ophalen.');

				// extract filename from header and remove double quotes around it
				const filenameParts = response.headers.get('content-disposition')?.split('filename=') || [];
				const filename = filenameParts[1]?.replace(/^"(.+(?="$))"$/, '$1');

				updateDocumentState({ loading: false, contentType: firstContentType, filename });
			})
			.catch((e: Error) => {
				updateDocumentState({
					loading: false,
					error: e.message,
				});
				if (onFailure) onFailure(e);
			});
	}, [uri]);

	if (loading) {
		return (
			<DocumentViewerStyle data-testid="document-viewer">
				<SpinnerStyle data-testid="spinner" color={themeColor('secondary')} size={25} />
			</DocumentViewerStyle>
		);
	}

	return (
		<DocumentViewerStyle data-testid="document-viewer">
			<Heading forwardedAs="h3">{filename}</Heading>
			{error && (
				<Alert level="error" outline>
					{error}
				</Alert>
			)}
			{contentType && <DocumentRenderer uri={uri} contentType={contentType} />}
		</DocumentViewerStyle>
	);
};

export default DocumentViewer;
