import React from 'react';
import { FileRejection } from 'react-dropzone';

export type CustomFile = {
	progress?: number;
	uploadXhrError?: string;
	response?: string;
} & File;

export type Files = [CustomFile?, FileRejection?];

// Using Object.assign (from the dropzone docs) because spreading doesn't seem to work properly
// with File objects
const formatFiles = (files: File[], statusText: string, error = false): File[] =>
	files.map((file: File) =>
		Object.assign(file, {
			progress: 100,
			response: statusText,
			uploadXhrError: error ? true : undefined,
		}),
	);

export const useFileUpload = (getPostUrl: () => string) => {

	const [files, setFiles] = React.useState<Files | []>([]);
	const [stateXhr, setStateXhr] = React.useState<XMLHttpRequest | null>(null);

	const handleOnDrop = React.useCallback(
		(acceptedFiles: File[], fileRejections: FileRejection[]) => {

			const postUrl = getPostUrl()
			const formData = new FormData();
			for (const file of acceptedFiles) formData.append('file', file);

			const xhr = new XMLHttpRequest();

			xhr.upload.onprogress = (event) => {
				const percentage = (event.loaded / event.total) * 100;
				const filesWithPercentage = acceptedFiles.map((file: File) =>
					Object.assign(file, {
						progress: percentage,
					}),
				);

				setFiles((previousFiles) => [...previousFiles, ...filesWithPercentage, ...fileRejections] as Files);
			};

			xhr.onreadystatechange = () => {
				if (xhr.readyState === XMLHttpRequest.DONE) {
					const status = xhr.status;

					if (status === 0 || (status >= 200 && status < 400)) {
						// The request has been completed successfully
						const filesWithSuccessResponse = formatFiles(acceptedFiles, xhr.statusText);
						setFiles([...filesWithSuccessResponse, ...fileRejections] as Files);
					} else {
						// Something went wrong with the request
						const filesWithErrorResponse = formatFiles(acceptedFiles, xhr.statusText, true);
						setFiles([...filesWithErrorResponse, ...fileRejections] as Files);
					}
				}
			};

			xhr.open('POST', postUrl, true);
			xhr.send(formData);

			setStateXhr(xhr);
		},
		[getPostUrl],
	);

	const handleOnCancel = React.useCallback(
		(file: CustomFile) => {
			// Cancel network uploading activity
			stateXhr?.abort();

			// Remove file from file list
			handleOnFileRemove(file);
		},
		[files],
	);

	const handleOnFileRemove = React.useCallback(
		(file: CustomFile) => {
			const newFiles: Files = [...(files as Files)];
			newFiles.splice(newFiles.indexOf(file), 1);
			setFiles(newFiles);
		},
		[files],
	);

	const handleOnRemoveAllFiles = () => setFiles([]);

	return {
		handleOnDrop,
		handleOnCancel,
		handleOnFileRemove,
		handleOnRemoveAllFiles,
		files,
	};
};
