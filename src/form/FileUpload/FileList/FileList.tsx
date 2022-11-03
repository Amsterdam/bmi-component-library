import React, { useEffect, useRef } from 'react';
import { Document } from '@amsterdam/asc-assets';
import { Icon } from '@amsterdam/asc-ui';

import type { MutableRefObject } from 'react';

import { generateBase64FromImageFile } from '../../../utils/';

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
};

type FileListItemProps = {
	file: CustomFileOrRejection;
	removeLabel: string;
	cancelLabel: string;
	onFileRemove: (file: CustomFile) => void;
	onCancel: (file: CustomFile) => void;
	fileUploadErrorLabel: string;
	fileUploadInProgressLabel?: string;
};

const isFileUploading = (file: CustomFileOrRejection) => (file && file.progress && file.progress < 100 ? true : false);

const isFileUploadingIndeterminate = (file: CustomFileOrRejection) => (file && file.progress === 0 ? true : false);

const useBase64PreviewValue = (
	file: CustomFileOrRejection,
	setPreview: (value: string) => void,
	mountedRef: MutableRefObject<boolean>,
) => {
	useEffect(() => {
		let houseKeeping: Function | null = null;

		if (file && !file.errors && 'undefined' === typeof file.preview) {
			generateBase64FromImageFile(file).then(({ result, readerCleanup }) => {
				if (!mountedRef.current) return null;
				setPreview(result);
				houseKeeping = readerCleanup;
			});
		}

		return () => {
			mountedRef.current = false;
			if (houseKeeping) houseKeeping();
		};
	}, []);
};

const FileList: React.FC<FileListProps> = ({
	files,
	cancelLabel,
	removeLabel,
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
}) => {
	const [preview, setPreview] = React.useState<string | undefined>(file.preview);
	const mountedRef = useRef(true);
	const isUploading = isFileUploading(file);
	const isIndeterminate = isFileUploadingIndeterminate(file);

	useBase64PreviewValue(file, setPreview, mountedRef);

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
					<FileNameStyle data-testid="file-list-item-name">
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
