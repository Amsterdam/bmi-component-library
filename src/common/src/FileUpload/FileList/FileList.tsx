import React from 'react';
import { ChevronLeft, Close, Document } from '@amsterdam/asc-assets';
import classNames from 'classnames';

import {
	FileRemoveStyle,
	FileIconStyle,
	FileListStyle,
	FileListItemStyle,
	FileNameStyle,
	FileNameErrorStyle,
	FileProgressBarStyle,
} from './FileListStyles';
import { CustomFile, Files } from '../hooks';
import { FileRejection } from 'react-dropzone';

export type Props = {
	files: Files;
	removeLabel: string;
	cancelLabel: string;
	onFileRemove: (file: CustomFile & FileRejection) => void;
	onCancel: (file: CustomFile & FileRejection) => void;
	fileUploadErrorLabel: string;
	fileUploadInProgressLabel: string;
	isUploading?: boolean;
	progress?: number;
};

type FileListItemProps = {
	file: CustomFile & FileRejection;
	removeLabel: string;
	cancelLabel: string;
	onFileRemove: (file: CustomFile) => void;
	onCancel: (file: CustomFile) => void;
	fileUploadErrorLabel: string;
	fileUploadInProgressLabel: string;
};

function isFileUploading(file: CustomFile & FileRejection) {
	return file && file.progress && file.progress > 0 && file.progress < 100;
}

const FileList: React.FC<Props> = ({
	files,
	cancelLabel,
	removeLabel,
	onFileRemove,
	onCancel,
	fileUploadErrorLabel,
	fileUploadInProgressLabel,
}: Props) => {
	return (
		<FileListStyle data-testid="file-list">
			{files.map((file, index) => (
				<FileListItem
					key={`file-number-${index}`}
					onCancel={() => onCancel(file)}
					onFileRemove={() => onFileRemove(file)}
					cancelLabel={cancelLabel}
					removeLabel={removeLabel}
					file={file}
					fileUploadErrorLabel={fileUploadErrorLabel}
					fileUploadInProgressLabel={fileUploadInProgressLabel}
				/>
			))}
		</FileListStyle>
	);
};

const FileListItem: React.FC<FileListItemProps> = ({
	file,
	cancelLabel,
	removeLabel,
	onFileRemove,
	onCancel,
	fileUploadErrorLabel,
	fileUploadInProgressLabel,
}: FileListItemProps) => {
	const isUploading = isFileUploading(file);
	const classes = classNames({
		'file-list-item--is-uploading': isUploading,
	});

	return (
		<FileListItemStyle className={classes} data-testid="file-list-item">
			<>
				<FileIconStyle size={16} color={file?.errors || file?.uploadXhrError ? '#EC0000' : '#000000'}>
					<Document />
				</FileIconStyle>
				{file?.errors || file?.uploadXhrError ? (
					<FileNameErrorStyle>
						{file?.file?.name || file.name} {fileUploadErrorLabel}
					</FileNameErrorStyle>
				) : (
					<FileNameStyle>
						{file.name} {isUploading && fileUploadInProgressLabel}
					</FileNameStyle>
				)}
			</>
			{isUploading ? (
				<>
					<FileRemoveStyle
						onClick={() => onCancel(file)}
						variant="textButton"
						iconSize={14}
						iconLeft={<ChevronLeft />}
					>
						{cancelLabel}
					</FileRemoveStyle>
					<FileProgressBarStyle max="100" value={file.progress} />
				</>
			) : (
				<FileRemoveStyle
					onClick={() => onFileRemove(file)}
					variant="textButton"
					iconSize={14}
					iconLeft={<Close />}
				>
					{removeLabel}
				</FileRemoveStyle>
			)}
		</FileListItemStyle>
	);
};

export default FileList;
