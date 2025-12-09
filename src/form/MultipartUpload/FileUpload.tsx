import { useUpload } from './hooks';
import { UploadProgressStyle } from '@amsterdam/bmi-component-library/form/MultipartUpload/FileUploadStyles';
import { useState } from 'react';

type FileUploadProps = {
	name: string;
	limit: number;
};

let abortCallback: (() => void) | null = null;

const FileUpload = (props: FileUploadProps) => {
	const [progress, setProgress] = useState(0);
	const [isUploading, setUploading] = useState(false);

	const getFileList = (event: React.ChangeEvent<HTMLInputElement>): FileList | null => {
		// Make sure that event.target and event.target.files is defined
		if (!event.target || !event.target.files) return null;

		// Make sure that the file list length is greater than 0
		if (event.target.files.length === 0) return null;

		return event.target.files;
	};
	/**
	 * Handle file changed event
	 *
	 * @param event
	 * @param limit
	 */
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, limit: number) => {
		// Stop previous upload before starting new upload
		handleAbort();

		// Early return, if target or files is null or length is 0
		const list = getFileList(event);

		if (list === null) {
			console.log('No file selected');
			return;
		}

		// Initiate upload
		const { onProgress, abort } = useUpload('https://localhost:8000/upload/chunk', list[0], {
			limit: limit * 1024, // 2MByte
		});

		setUploading(true);

		// Set abortCallback
		abortCallback = abort;

		// Connect progress handler
		onProgress(setProgress);
	};

	/**
	 * Handle abort click
	 */
	const handleAbort = () => {
		if (abortCallback) {
			abortCallback();
			abortCallback = null;
		}

		setUploading(false);
	};
	return (
		<div>
			<input
				id={props.name}
				data-testid={props.name}
				name={props.name}
				type="file"
				onChange={(event) => handleChange(event, props.limit)}
			/>
			<UploadProgressStyle style={{ width: progress + '%' }}>
				{progress}%{' '}
				<button id="abortBtn" onClick={handleAbort} style={{ display: isUploading ? 'inline-block' : 'none' }}>
					Abort
				</button>
			</UploadProgressStyle>
		</div>
	);
};

export { FileUpload, FileUploadProps };
