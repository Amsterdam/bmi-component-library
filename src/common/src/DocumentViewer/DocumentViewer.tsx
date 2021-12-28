import React, { useEffect, useState } from 'react';
import { Alert, Heading, Spinner, themeColor } from '@amsterdam/asc-ui';
import { DocumentViewerStyle } from './DocumentViewerStyles';
import DocumentRenderer from './DocumentRenderer';

type Props = {
	uri: string;
	authorizationHeader?: string;
};

export type DocumentState = {
	uri: string;
	loading: boolean;
	filename?: string;
	error?: string;
	contentType?: string;
};

const DocumentViewer: React.FC<Props> = ({ uri, authorizationHeader }: Props) => {
	const [documentState, setDocumentState] = useState<DocumentState>({ uri, loading: false });

	const updateDocumentState = (documentState: Partial<DocumentState>) => {
		setDocumentState((prevState) => {
			return {
				...prevState,
				...documentState,
			};
		});
	};

	const getRequestHeaders = (): HeadersInit => {
		if (authorizationHeader) {
			return { Authorization: authorizationHeader };
		}

		return {};
	};

	useEffect(() => {
		const filename = uri.split('/').pop() || 'Onbekend bestand';
		updateDocumentState({ loading: true, error: undefined, contentType: undefined, filename });

		fetch(uri, { method: 'HEAD', headers: getRequestHeaders() })
			.then((response) => {
				if (!response.ok) {
					throw response.status === 404 ? 'Document niet gevonden.' : 'Fout bij het ophalen.';
				}

				return response;
			})
			.then((response) => {
				const contentTypeRaw = response.headers.get('content-type');
				const contentTypes = contentTypeRaw?.split(';') || [];

				if (!contentTypes[0]) {
					throw 'Fout bij het ophalen.';
				}

				updateDocumentState({ loading: false, contentType: contentTypes[0] });
			})
			.catch((error) => {
				updateDocumentState({ loading: false, error });
			});
	}, [uri]);

	if (documentState.loading) {
		return (
			<DocumentViewerStyle>
				<Spinner color={themeColor('secondary')} size={25} />
			</DocumentViewerStyle>
		);
	}

	return (
		<DocumentViewerStyle>
			<Heading forwardedAs="h3">{documentState.filename}</Heading>
			{documentState.error && (
				<Alert level="error" outline>
					{documentState.error}
				</Alert>
			)}
			{documentState.contentType && (
				<DocumentRenderer uri={documentState.uri} contentType={documentState.contentType} />
			)}
		</DocumentViewerStyle>
	);
};

export default DocumentViewer;
