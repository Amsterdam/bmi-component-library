import React, { HTMLAttributes } from 'react';
import { DropzoneOptions, FileRejection, useDropzone } from 'react-dropzone';

import {
	FileUploadStyle,
	FileUploadContentStyle,
	FileUploadPlaceholderStyle,
	FileUploadSelectFilesButtonStyle,
	FileUploadContainerStyle,
} from './FileUploadStyles';
import { CustomFile, useFileUpload, CustomFileOrRejection } from './hooks';

import FileList from './FileList/FileList';

const detectIsTouchScreenOnly = () => (window?.matchMedia('(pointer: coarse)').matches ? true : false);

export type FileUploadProps = {
	getPostUrl: (file: CustomFile) => Promise<string>;
	getHeaders: () => Promise<{ [key: string]: string }>;
	placeholder: string;
	droppingLabel: string;
	removeLabel: string;
	cancelLabel: string;
	selectFilesLabel: string;
	fileUploadErrorLabel: string;
	fileUploadInProgressLabel: string;
	fileListTitle?: string;
	removeCompletedFromList?: boolean;
	onFileRemove?: (file: CustomFile & FileRejection) => void;
	onFileSuccess?: (file: CustomFile) => void;
	options?: DropzoneOptions;
	storedFiles?: CustomFileOrRejection[];
	httpMethod?: 'POST' | 'PUT';
} & HTMLAttributes<HTMLDivElement>;

const FileUpload: React.FC<FileUploadProps> = ({
	getPostUrl,
	getHeaders,
	droppingLabel,
	placeholder,
	removeLabel,
	cancelLabel,
	selectFilesLabel,
	fileUploadErrorLabel,
	fileUploadInProgressLabel,
	fileListTitle,
	onFileRemove,
	onFileSuccess,
	removeCompletedFromList,
	options,
	storedFiles = [],
	httpMethod = 'POST',
	...otherProps
}) => {
	const [numberOfDraggedFiles, setNumberOfDraggedFiles] = React.useState(0);
	const isTouchScreen = detectIsTouchScreenOnly();
	const { files, handleOnDrop, handleOnCancel, handleOnFileRemove } = useFileUpload(
		getPostUrl,
		getHeaders,
		httpMethod,
		storedFiles,
		Math.max(...[...(storedFiles.length ? storedFiles.map((file) => file.tmpId) : [0])]),
		onFileSuccess,
	);
	const { open, getRootProps, getInputProps, isDragActive } = useDropzone({
		...options,
		onDrop: handleOnDrop,
		onDragEnter: (event) => {
			setNumberOfDraggedFiles(event.dataTransfer.items.length);
		},
		noDrag: isTouchScreen,
	});

	return (
		<FileUploadContainerStyle {...otherProps}>
			<FileUploadStyle data-testid="file-upload" {...getRootProps({ isDragActive })}>
				<input data-testid="file-upload__input" {...getInputProps()} />
				<FileUploadContentStyle>
					<>
						<div>
							{isDragActive ? (
								<FileUploadPlaceholderStyle>
									{numberOfDraggedFiles} {droppingLabel}
								</FileUploadPlaceholderStyle>
							) : (
								<FileUploadPlaceholderStyle>{placeholder}</FileUploadPlaceholderStyle>
							)}
							<FileUploadSelectFilesButtonStyle variant="textButton" onClick={open} type="button">
								{selectFilesLabel}
							</FileUploadSelectFilesButtonStyle>
						</div>

						<FileList
							files={
								removeCompletedFromList
									? files.filter((file) => file.progress !== 100 || file?.uploadXhrError === true)
									: files
							}
							removeLabel={removeLabel}
							cancelLabel={cancelLabel}
							onCancel={handleOnCancel}
							onFileRemove={(file: CustomFile & FileRejection) => {
								handleOnFileRemove(file);
								// Let application track file removal
								onFileRemove && onFileRemove(file);
							}}
							fileUploadErrorLabel={fileUploadErrorLabel}
							fileUploadInProgressLabel={fileUploadInProgressLabel}
							title={fileListTitle}
						/>
					</>
				</FileUploadContentStyle>
			</FileUploadStyle>
		</FileUploadContainerStyle>
	);
};

export default FileUpload;
