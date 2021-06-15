import React from 'react';
import { ChevronLeft, Close, Document } from '@amsterdam/asc-assets';

import {
	FileRemoveStyle,
	FileIconStyle,
	FileListStyle,
	FileListItemStyle,
	FileNameStyle,
	FileNameErrorStyle,
	FileProgressBarStyle,
} from './FileListStyles';

export type Props = {
	files: any;
	removeLabel: string;
	cancelLabel: string;
	onFileRemove: (file: any) => void;
	onCancel: (file: any) => void;
	fileUploadErrorLabel: string;
	fileUploadInProgressLabel: string;
	isUploading?: boolean;
	progress?: number;
};

type FileListItemProps = {
	file: any;
	removeLabel: string;
	cancelLabel: string;
	onFileRemove: (file: any) => void;
	onCancel: (file: any) => void;
	fileUploadErrorLabel: string;
	fileUploadInProgressLabel: string;
};

const FileList: React.FC<Props> = ({
	files,
	cancelLabel,
	removeLabel,
	onFileRemove,
	onCancel,
	fileUploadErrorLabel,
	fileUploadInProgressLabel,
}: Props) => (
	<FileListStyle data-testid="file-list">
		{files.map((file: any, index: number) => (
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

const FileListItem: React.FC<FileListItemProps> = ({
	file,
	cancelLabel,
	removeLabel,
	onFileRemove,
	onCancel,
	fileUploadErrorLabel,
	fileUploadInProgressLabel,
}: FileListItemProps) => {
	const isUploading = file.progress > 0 && file.progress < 100;

	return (
		<FileListItemStyle data-testid="file-list-item">
			<>
				<FileIconStyle size={16} color={file.errors ? '#EC0000' : '#000000'}>
					<Document />
				</FileIconStyle>
				{file.errors ? (
					<FileNameErrorStyle>
						{file.file.name} {fileUploadErrorLabel}
					</FileNameErrorStyle>
				) : (
					<FileNameStyle>
						{file.name} {isUploading && fileUploadInProgressLabel}
					</FileNameStyle>
				)}
			</>
			{isUploading ? (
				<>
					<FileRemoveStyle onClick={() => onCancel(file)} variant="textButton" iconSize={14} iconLeft={<ChevronLeft />}>
						{cancelLabel}
					</FileRemoveStyle>
					<FileProgressBarStyle max="100" value={file.progress} />
				</>
			) : (
				<FileRemoveStyle onClick={() => onFileRemove(file)} variant="textButton" iconSize={14} iconLeft={<Close />}>
					{removeLabel}
				</FileRemoveStyle>
			)}
		</FileListItemStyle>
	);
};

export default FileList;
