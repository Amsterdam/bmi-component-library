import { useRef } from 'react';
import type { FC } from 'react';

import { Document } from '@amsterdam/asc-assets';
import { Icon } from '@amsterdam/asc-ui';

import {
	FileListItemButtonStyle,
	FileListItemImagePreviewStyle,
	FileListItemPreviewWrapperStyle,
	FileListStyle,
	FileListItemStyle,
	FileNameStyle,
	FileNameErrorStyle,
	FileProgressBarStyle,
	FileListTitleStyle,
} from './FileListStyles';

import { useBase64PreviewValue } from './hooks';
import type { CustomFile, CustomFileOrRejection, Files } from '../hooks';

export type FileListProps = {
	files: Files;
	removeLabel: string;
	cancelLabel: string;
	onFileRemove: (file: CustomFileOrRejection) => void;
	onCancel: (file: CustomFileOrRejection) => void;
	fileUploadErrorLabel: string;
	fileUploadInProgressLabel?: string;
	isUploading?: boolean;
	progress?: number;
	title?: string;
	onFileNameClick?: (file: CustomFile) => void;
};

type FileListItemProps = {
	file: CustomFileOrRejection;
	removeLabel: string;
	cancelLabel: string;
	onFileRemove: (file: CustomFile) => void;
	onCancel: (file: CustomFile) => void;
	fileUploadErrorLabel: string;
	fileUploadInProgressLabel?: string;
	onFileNameClick?: (file: CustomFile) => void;
};

const isFileUploading = (file: CustomFileOrRejection) => (file && file.progress && file.progress < 100 ? true : false);

const isFileUploadingIndeterminate = (file: CustomFileOrRejection) => (file && file.progress === 0 ? true : false);

const FileList: FC<FileListProps> = ({
	files,
	cancelLabel,
	removeLabel,
	onFileNameClick,
	onFileRemove,
	onCancel,
	fileUploadErrorLabel,
	fileUploadInProgressLabel,
	title,
	...otherProps
}) => {
	if (files?.length === 0) {
		return null;
	}

	return (
		<FileListStyle data-testid="file-list" {...otherProps}>
			{title && <FileListTitleStyle>{title}</FileListTitleStyle>}
			{files.map((file, index) => (
				<FileListItem
					key={file.tmpId || index}
					onCancel={() => onCancel(file)}
					onFileRemove={() => onFileRemove(file)}
					{...(onFileNameClick ? { onFileNameClick: () => onFileNameClick && onFileNameClick(file) } : {})}
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

const FileListItem: FC<FileListItemProps> = ({
	file,
	cancelLabel,
	removeLabel,
	onFileNameClick,
	onFileRemove,
	onCancel,
	fileUploadErrorLabel,
	fileUploadInProgressLabel,
}) => {
	const mountedRef = useRef(true);
	const isUploading = isFileUploading(file);
	const isIndeterminate = isFileUploadingIndeterminate(file);

	const preview = useBase64PreviewValue(file, mountedRef);

	return (
		<FileListItemStyle data-testid="file-list-item">
			<>
				{!isUploading && !isIndeterminate && (
					<FileListItemPreviewWrapperStyle data-testid="file-list-item-preview">
						{preview ? (
							<FileListItemImagePreviewStyle src={preview} alt={file.name} />
						) : (
							<Icon size={32} inline>
								<Document />
							</Icon>
						)}
					</FileListItemPreviewWrapperStyle>
				)}

				{file?.errors || file?.uploadXhrError ? (
					<FileNameErrorStyle data-testid="file-list-item-error">
						{file?.file?.name || file.name} {fileUploadErrorLabel}
					</FileNameErrorStyle>
				) : (
					<FileNameStyle
						data-testid="file-list-item-name"
						{...(isUploading ? {} : { onClick: () => onFileNameClick && onFileNameClick(file) })}
						hasClickListener={onFileNameClick ? true : false}
					>
						{file.name} {isUploading && fileUploadInProgressLabel}
					</FileNameStyle>
				)}
			</>
			{isUploading || isIndeterminate ? (
				<>
					<FileListItemButtonStyle
						onClick={() => onCancel(file)}
						variant="textButton"
						data-testid="file-list-item-cancel"
					>
						{cancelLabel}
					</FileListItemButtonStyle>
					<FileProgressBarStyle
						max="100"
						{...(isUploading ? { value: file.progress } : {})}
						data-testid="file-list-item-progress"
					/>
				</>
			) : (
				<FileListItemButtonStyle
					onClick={() => onFileRemove(file)}
					variant="textButton"
					data-testid="file-list-item-remove"
				>
					{removeLabel}
				</FileListItemButtonStyle>
			)}
		</FileListItemStyle>
	);
};

export default FileList;
