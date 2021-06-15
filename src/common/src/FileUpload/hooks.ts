import React from 'react';
import { FileRejection } from 'react-dropzone';

export const useFileUpload = (postUrl: string) => {
	const [files, setFiles] = React.useState<File[]>([]);
	const [stateXhr, setStateXhr] = React.useState<XMLHttpRequest | null>(null);

	const handleOnDrop = React.useCallback(
		(acceptedFiles: File[], fileRejections: FileRejection[]) => {
			const formData = new FormData();
			for (const file of acceptedFiles) formData.append('file', file);

			const xhr = new XMLHttpRequest();

			xhr.upload.onprogress = (event) => {
				// @ts-ignore
				const percentage = parseInt((event.loaded / event.total) * 100);
				const filesWithPercentage = acceptedFiles.map((file: File) =>
					Object.assign(file, {
						progress: percentage,
					}),
				);

				setFiles((previousFiles: any[]) => [...previousFiles, ...filesWithPercentage, ...fileRejections]);
			};

			xhr.onreadystatechange = () => {
				if (xhr.readyState !== 4) {
					console.log('Something went wrong - 4'); // Handle error here
					return;
				}
				if (xhr.status !== 200) {
					console.log('Something went wrong - 200'); // Handle error here
					return;
				}

				console.log('success'); // Handle success here
			};

			xhr.open('POST', postUrl, true);
			xhr.send(formData);

			setStateXhr(xhr);
		},
		[postUrl],
	);

	const handleOnCancel = React.useCallback(
		(file: File) => {
			// Cancel network uploading activity
			stateXhr?.abort();

			// Remove file from file list
			handleOnFileRemove(file);
		},
		[files],
	);

	const handleOnFileRemove = React.useCallback(
		(file: File) => {
			const newFiles = [...files];
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
