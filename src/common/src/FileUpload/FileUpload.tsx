import React from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { Download } from '@amsterdam/asc-assets';
import useDetectTouchscreen from '@amsterdam/asc-ui/lib/utils/hooks/useDetectTouchScreen';
import {
	FileUploadStyle,
	FileUploadContentStyle,
	FileUploadPlaceholderStyle,
	FileUploadSelectFilesButtonStyle,
} from './FileUploadStyles';
import { Icon } from '@amsterdam/asc-ui/lib/components/Quote/QuoteStyle';
import { useFileUpload } from './hooks';

import FileList from './FileList/FileList';

type Props = {
	postUrl: string;
	placeholder: string;
	droppingLabel: string;
	removeLabel: string;
	cancelLabel: string;
	selectFilesLabel: string;
	fileUploadErrorLabel: string;
	fileUploadInProgressLabel: string;
	options?: DropzoneOptions;
};

const FileUpload: React.FC<Props> = ({
	postUrl,
	droppingLabel,
	placeholder,
	removeLabel,
	cancelLabel,
	selectFilesLabel,
	fileUploadErrorLabel,
	fileUploadInProgressLabel,
	options,
}: Props) => {
	const isTouchScreen = useDetectTouchscreen();
	const { files, handleOnDrop, handleOnCancel, handleOnFileRemove } = useFileUpload(postUrl);
	const { open, getRootProps, getInputProps, isDragActive, draggedFiles } = useDropzone({
		...options,
		onDrop: handleOnDrop,
		noDrag: isTouchScreen,
	});

	return (
		<React.Fragment>
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
							<FileUploadSelectFilesButtonStyle variant="textButton" onClick={open}>
								{selectFilesLabel}
							</FileUploadSelectFilesButtonStyle>
							<Icon size={16} color="#004799">
								<Download />
							</Icon>
						</>
					)}
				</FileUploadContentStyle>
			</FileUploadStyle>
			{files?.length > 0 && (
				<FileList
					files={files}
					removeLabel={removeLabel}
					cancelLabel={cancelLabel}
					onCancel={handleOnCancel}
					onFileRemove={handleOnFileRemove}
					fileUploadErrorLabel={fileUploadErrorLabel}
					fileUploadInProgressLabel={fileUploadInProgressLabel}
				/>
			)}
		</React.Fragment>
	);
};

export default FileUpload;
