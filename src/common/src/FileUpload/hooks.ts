import React from 'react';
import { FileRejection } from 'react-dropzone';

export type CustomFile = {
	progress?: number;
} & File;

export type Files = [CustomFile?, FileRejection?];

export const useFileUpload = (postUrl: string) => {
	const [files, setFiles] = React.useState<Files | []>([]);
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

				setFiles((previousFiles) => [...previousFiles, ...filesWithPercentage, ...fileRejections] as Files);
			};

			xhr.onreadystatechange = () => {
				if (xhr.readyState !== 4) {
					console.log('Something went wrong while uploading');
				}
				if (xhr.status !== 200) {
					console.log('Something went wrong while uploading');
				}
			};

			xhr.open('POST', postUrl, true);
			xhr.send(formData);

			setStateXhr(xhr);
		},
		[postUrl],
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
