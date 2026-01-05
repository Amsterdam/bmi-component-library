import {FileSelectorZone, UploadProgressStyle} from '@form/MultipartUpload/FileUploadStyles';
import {useUpload} from '@form/MultipartUpload/hooks';
import {useCallback, useState} from 'react';
import {useDropzone} from "react-dropzone";

type FileUploadProps = {
	name: string;
	limit: number;
	dropZone?: {
		text?: string;
		button?: {
			text?: string;
		}
	}
};

let abortCallback: (() => void) | null = null;

const FileUpload = (props: FileUploadProps) => {
	const [progress, setProgress] = useState(0);
	const [isUploading, setUploading] = useState(false);

	/**
	 * Handle file changed event
	 *
	 * @param event
	 * @param limit
	 */
	const onDrop = useCallback((acceptedFiles: File[]) => {
		// Stop previous upload before starting new upload
		handleAbort();

		if (acceptedFiles.length === 0) {
			console.log('No file selected');
			return;
		}

		// Initiate upload
		const {onProgress, abort} = useUpload('https://localhost:8000/upload/chunk', acceptedFiles[0], {
			limit: props.limit * 1024, // 2MByte
		});

		setUploading(true);

		// Set abortCallback
		abortCallback = abort;

		// Connect progress handler
		onProgress(setProgress);
	}, []);

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
	const {getRootProps, getInputProps} = useDropzone({onDrop, multiple: false});
	return (
		<>
			<div {...getRootProps()}>
				<FileSelectorZone>
					<input {...getInputProps({id: props.name})} data-testid={props.name} />
					{props.dropZone?.text ?? "Drag 'n' drop some file here or "}
					<button>{props.dropZone?.button?.text ?? 'click to select files'}</button>
				</FileSelectorZone>
			</div>
			<UploadProgressStyle style={{width: progress + '%'}}>
				{progress}%{' '}
				<button id="abortBtn" onClick={handleAbort} style={{display: isUploading ? 'inline-block' : 'none'}}>
					Abort
				</button>
			</UploadProgressStyle>
		</>
	);
};

export {FileUpload, FileUploadProps};
