import React, { HTMLAttributes } from 'react';
import { DropzoneOptions, FileRejection, useDropzone } from 'react-dropzone';
import { Download } from '@amsterdam/asc-assets';
import useDetectTouchscreen from '@amsterdam/asc-ui/lib/utils/hooks/useDetectTouchScreen';
import {
	FileUploadStyle,
	FileUploadContentStyle,
	FileUploadPlaceholderStyle,
	FileUploadSelectFilesButtonStyle,
	FileUploadContainerStyle,
} from './FileUploadStyles';
import { Icon } from '@amsterdam/asc-ui/lib/components/Quote/QuoteStyle';
import { CustomFile, useFileUpload, CustomFileOrRejection } from './hooks';

import FileList from './FileList/FileList';

export type Props = {
	getPostUrl: () => Promise<string>;
	getHeaders: () => Promise<{ [key: string]: string }>;
	placeholder: string;
	droppingLabel: string;
	removeLabel: string;
	cancelLabel: string;
	selectFilesLabel: string;
	fileUploadErrorLabel: string;
	fileUploadInProgressLabel: string;
	removeCompletedFromList?: boolean;
	onFileRemove?: (file: CustomFile & FileRejection) => void;
	onFileSuccess?: (file: CustomFile) => void;
	options?: DropzoneOptions;
	storedFiles?: CustomFileOrRejection[];
} & HTMLAttributes<HTMLDivElement>;

const FileUpload: React.FC<Props> = ({
	getPostUrl,
	getHeaders,
	droppingLabel,
	placeholder,
	removeLabel,
	cancelLabel,
	selectFilesLabel,
	fileUploadErrorLabel,
	fileUploadInProgressLabel,
	onFileRemove,
	onFileSuccess,
	removeCompletedFromList,
	options,
	storedFiles,
	...otherProps
}: Props) => {
	const isTouchScreen = useDetectTouchscreen();
	const { files, handleOnDrop, handleOnCancel, handleOnFileRemove } = useFileUpload(
		getPostUrl,
		getHeaders,
		onFileSuccess,
	);
	const { open, getRootProps, getInputProps, isDragActive, draggedFiles } = useDropzone({
		...options,
		onDrop: handleOnDrop,
		noDrag: isTouchScreen,
	});

	return (
		<FileUploadContainerStyle {...otherProps}>
			<FileUploadStyle data-testid="file-upload" {...getRootProps({ isDragActive })}>
				<input data-testid="file-upload__input" {...getInputProps()} />
				<FileUploadContentStyle>
					{isDragActive ? (
						<FileUploadPlaceholderStyle>
							{draggedFiles.length} {droppingLabel}
						</FileUploadPlaceholderStyle>
					) : (
						<>
							<FileUploadPlaceholderStyle>{placeholder}</FileUploadPlaceholderStyle>
							<FileUploadSelectFilesButtonStyle variant="textButton" onClick={open} type="button">
								{selectFilesLabel}
							</FileUploadSelectFilesButtonStyle>
							<Icon size={16} color="#004799">
								<Download />
							</Icon>
						</>
					)}
				</FileUploadContentStyle>
			</FileUploadStyle>
			{(files?.length > 0 || (storedFiles && storedFiles.length > 0)) && (
				<FileList
					files={
						storedFiles
							? storedFiles
							: removeCompletedFromList
							? files.filter((file) => file.progress !== 100)
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
				/>
			)}
		</FileUploadContainerStyle>
	);
};

export default FileUpload;
