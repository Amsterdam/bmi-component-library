import { useCallback, useEffect, useState } from 'react';
import { FileRejection } from 'react-dropzone';

export interface CustomFile extends File {
	tmpId: number;
	progress?: number;
	uploadXhrError?: boolean;
	response?: string;
	preview?: string;
}

export type CustomFileOrRejection = CustomFile & FileRejection;

export type Files = CustomFileOrRejection[];

let tmpId = 0;

export const useFileUpload = (
	getPostUrl: (file: CustomFile) => Promise<string>,
	getHeaders: () => Promise<{ [key: string]: string }>,
	httpMethod: 'POST' | 'PUT' = 'POST',
	storedFiles: CustomFileOrRejection[] = [],
	lastTmpId = 0,
	onFileSuccess?: (file: CustomFile) => void,
) => {
	const [files, setFiles] = useState<CustomFileOrRejection[]>(storedFiles);
	const [stateXhr, setStateXhr] = useState<{ [key: string]: XMLHttpRequest }>({});

	let isMounted = true;

	useEffect(() => {
		tmpId = lastTmpId;
		return () => {
			isMounted = false;
		}
	}, []);

	const handleOnDrop = useCallback(
		(acceptedFiles: File[], fileRejections: FileRejection[]) => {
			if (fileRejections.length && isMounted) {
				setFiles((previousFiles) => [...previousFiles, ...fileRejections] as Files);
			}

			const makeRequest = async (rawFile: File, nextTmpId: number) => {
				const customFile: CustomFile = Object.assign(rawFile, { tmpId: nextTmpId, progress: 0 });
				const postUrl = await getPostUrl(customFile);
				const headers = await getHeaders();
				
				if(isMounted){
					setFiles((previousFiles) => [...previousFiles, customFile] as Files);
				}

				const xhr = new XMLHttpRequest();

				xhr.upload.onprogress = (event) => {
					const percentage = event.lengthComputable
						? parseInt(String((event.loaded / event.total) * 100), 10)
						: 100;

					// Avoid file being re-rendered as removed from list prior to onreadystatechange having done its thing
					if (percentage === 100) return;
					if (isMounted) {
						setFiles(
							(previousFiles) =>
								[
									...previousFiles.map((file) => {
										if (file.tmpId === customFile.tmpId) {
											return Object.assign(file, {
												progress: percentage,
											});
										}
										return file;
									}),
								] as Files,
						);
					}
				};

				xhr.onreadystatechange = () => {
					if (xhr.readyState !== XMLHttpRequest.DONE) return;

					const status = xhr.status;
					const response = xhr.responseText;

					if (status >= 200 && status < 400) {
						// The request has been completed successfully
						customFile.progress = 100;
						customFile.response = response;
						customFile.uploadXhrError = undefined;
						// Let application track uploaded files
						onFileSuccess && onFileSuccess(customFile);
					} else {
						// Something went wrong with the request
						customFile.progress = 100;
						customFile.response = response;
						customFile.uploadXhrError = true;
					}
					if (isMounted) {
						setFiles(
							(previousFiles) =>
								previousFiles.map((file) => (file.tmpId === customFile.tmpId ? customFile : file)) as Files,
						);
					}
				};

				xhr.open(httpMethod, postUrl, true);
				Object.keys(headers).forEach((name) => xhr.setRequestHeader(name, headers[name]));
				xhr.send(rawFile);

				if (isMounted) {
					setStateXhr({
						...stateXhr,
						[`xhr_${customFile.tmpId}`]: xhr,
					});
				}
			};

			for (const file of acceptedFiles) {
				tmpId += 1;
				makeRequest(file, tmpId);
			}
		},
		[getPostUrl],
	);

	const handleOnCancel = useCallback(
		(file: CustomFileOrRejection) => {
			// Cancel network uploading activity
			stateXhr?.[`xhr_${file.tmpId}`]?.abort();
			// Remove file from file list
			if (isMounted) {
				setFiles(files.filter((f) => f.tmpId !== file.tmpId));
			}
		},
		[files],
	);

	const handleOnFileRemove = useCallback(
		(file: CustomFileOrRejection) => {
			// Remove file from file list
			if (isMounted) {
				setFiles(files.filter((f) => f.tmpId !== file.tmpId));
			}
		},
		[files],
	);

	const handleOnRemoveAllFiles = () => {
		if (isMounted) setFiles([]);
	};

	return {
		handleOnDrop,
		handleOnCancel,
		handleOnFileRemove,
		handleOnRemoveAllFiles,
		files,
	};
};
