import React from 'react';
import { FileRejection } from 'react-dropzone';

export interface CustomFile extends File {
	tmpId: number;
	progress?: number;
	uploadXhrError?: boolean;
	response?: string;
}

export type CustomFileOrRejection = CustomFile & FileRejection;
export type Files = CustomFileOrRejection[];

export const useFileUpload = (
	getPostUrl: () => Promise<string>,
	getHeaders: () => Promise<{ [key: string]: string }>,
	onFileSuccess?: (file: CustomFile) => void,
) => {
	const [files, setFiles] = React.useState<CustomFileOrRejection[]>([]);
	const [stateXhr, setStateXhr] = React.useState<{ [key: string]: XMLHttpRequest }>({});
	const [nextTmpId, setNextTmpId] = React.useState<number>(1);

	const handleOnDrop = React.useCallback(
		(acceptedFiles: File[], fileRejections: FileRejection[]) => {
			if (fileRejections.length) {
				setFiles((previousFiles) => [...previousFiles, ...fileRejections] as Files);
			}

			const makeRequest = async (rawFile: File) => {
				const postUrl = await getPostUrl();
				const headers = await getHeaders();
				const customFile: CustomFile = Object.assign(rawFile, { tmpId: nextTmpId });
				const fileList = [...files, customFile] as Files;
				setFiles(fileList);

				const formData = new FormData();
				formData.append('file', rawFile);
				const xhr = new XMLHttpRequest();

				xhr.upload.onprogress = (event) => {
					customFile.progress = (event.loaded / event.total) * 100;
				};

				xhr.onreadystatechange = () => {
					if (xhr.readyState !== XMLHttpRequest.DONE) return;
					const status = xhr.status;

					if (status === 0 || (status >= 200 && status < 400)) {
						// The request has been completed successfully
						customFile.progress = 100;
						customFile.response = xhr.responseText;
						customFile.uploadXhrError = undefined;
						// Let application track uploaded files
						onFileSuccess && onFileSuccess(customFile);
					} else {
						// Something went wrong with the request
						customFile.progress = 100;
						customFile.response = xhr.responseText;
						customFile.uploadXhrError = true;
					}
					setFiles([...files, customFile] as Files); // Trigger re-render of file list
				};

				xhr.open('POST', postUrl, true);
				Object.keys(headers).forEach((name) => xhr.setRequestHeader(name, headers[name]));
				xhr.send(formData);

				setStateXhr({
					...stateXhr,
					[`xhr_${customFile.tmpId}`]: xhr,
				});
				setNextTmpId(nextTmpId + 1);
			};

			for (const file of acceptedFiles) makeRequest(file);
		},
		[getPostUrl],
	);

	const handleOnCancel = React.useCallback(
		(file: CustomFile & FileRejection) => {
			// Cancel network uploading activity
			stateXhr?.[`xhr_${file.tmpId}`]?.abort();
			// Remove file from file list
			setFiles(files.filter((f) => f.tmpId !== file.tmpId));
		},
		[files],
	);

	const handleOnFileRemove = React.useCallback(
		(file: CustomFile & FileRejection) => {
			// Remove file from file list
			setFiles(files.filter((f) => f.tmpId !== file.tmpId));
		},
		[files],
	);

	const handleOnRemoveAllFiles = () => {
		setFiles([]);
	};

	return {
		handleOnDrop,
		handleOnCancel,
		handleOnFileRemove,
		handleOnRemoveAllFiles,
		files,
	};
};
