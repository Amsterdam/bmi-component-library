import React, { useEffect, useState } from 'react';
import { Alert, Heading, themeColor } from '@amsterdam/asc-ui';
import { DocumentViewerStyle, SpinnerStyle } from './DocumentViewerStyles';
import DocumentRenderer from './Renderer/DocumentRenderer';

type Props = {
	uri: string;
	authorizationHeader?: string;
	onFailure?: (e: Error) => void;
};

export type DocumentState = {
	loading: boolean;
	filename?: string;
	error?: string;
	contentType?: string;
};

const DocumentViewer: React.FC<Props> = ({ uri, authorizationHeader, onFailure }: Props) => {
	const [documentState, setDocumentState] = useState<DocumentState>({ loading: true });
	const { loading, filename, error, contentType } = documentState;

	const updateDocumentState = (documentState: Partial<DocumentState>) => {
		setDocumentState((prevState) => ({
			...prevState,
			...documentState,
		}));
	};

	const getRequestHeaders = (): HeadersInit => (authorizationHeader ? { Authorization: authorizationHeader } : {});

	useEffect(() => {
		const filename = uri.split('/').pop() || 'Onbekend bestand';
		updateDocumentState({ loading: true, error: undefined, contentType: undefined, filename });

		fetch(uri, { method: 'HEAD', headers: getRequestHeaders() })
			.then((response) => {
				if (!response.ok)
					throw new Error(response.status === 404 ? 'Document niet gevonden.' : 'Fout bij het ophalen.');

				const [firstContentType] = response.headers.get('content-type')?.split(';') || [];
				if (!firstContentType) throw new Error('Fout bij het ophalen.');

				updateDocumentState({ loading: false, contentType: firstContentType });
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
