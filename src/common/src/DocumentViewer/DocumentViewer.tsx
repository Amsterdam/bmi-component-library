import React, {useEffect, useState} from 'react';
import {Alert, Heading, Spinner, themeColor} from "@amsterdam/asc-ui";
import {DocumentViewerStyle} from "./DocumentViewerStyles";

type Props = {
	uri: string;
}

type DocumentState = {
	contentType: string;
	fileName: string;
}

const DocumentViewer: React.FC<Props> = ({uri}: Props) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [document, setDocument] = useState<DocumentState | null>();

	useEffect(() => {
		setLoading(true);
		setError(null);

		fetch(uri, {method: "HEAD"})
			.then((response) => {
				if (!response.ok) {
					throw response.status === 404 ? "Document niet gevonden." : "Fout bij het ophalen.";
				}

				const contentTypeRaw = response.headers.get("content-type");
				const contentTypes = contentTypeRaw?.split(";") || [];
				const contentType = contentTypes.length ? contentTypes[0] : undefined;

				if (contentType === undefined) {
					throw "Fout bij het ophalen.";
				}

				const fileName = uri.split("/").pop() || "Onbekend bestand";

				setDocument({ ...document, contentType: contentType, fileName: fileName });
			})
			.catch((error) => {
				setError(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [uri])

	if (loading)
		return <Spinner color={themeColor('secondary')} size={25}/>

	if (error)
		return <Alert level="error" outline>{error}</Alert>

	return (
		<DocumentViewerStyle>
			<Heading forwardedAs="h3">{document?.fileName}</Heading>
		</DocumentViewerStyle>
	)
}

export default DocumentViewer;
