import { PayloadResult, usePayloadGenerator } from '@bmi-component-library/form/MultipartUpload/usePayloadGenerator';
import axios, { AxiosProgressEvent, AxiosRequestConfig, AxiosResponse } from 'axios';

type UploadOptions = {
	limit?: number;
};

const useUpload = (url: string, file: File, options?: UploadOptions) => {
	console.log(file);

	// @todo no limits route
	if (!options?.limit) {
		throw new Error('There is no upload limit defined');
	}

	/**
	 * Create formData from payload
	 *
	 * @param payload
	 */
	const getFormData = (payload: PayloadResult) => {
		const formData = new FormData();

		// Add the chunk as a blob
		formData.append('chunk', payload.blob, `${payload.fileName}.part${payload.progress.current}`);

		// Add any metadata your backend expects
		formData.append('hash', payload.hash);
		formData.append('size', payload.blob.size.toString());
		formData.append('progress[current]', payload.progress.current.toString());
		formData.append('progress[total]', payload.progress.total.toString());

		return formData;
	};

	/**
	 * POST form data to given url
	 *
	 * @param url
	 * @param data
	 * @param onProgress
	 */
	const upload = (
		url: string,
		data: FormData,
		onProgress: (event: AxiosProgressEvent) => void,
	): Promise<AxiosResponse> => {
		const config: AxiosRequestConfig = {
			withCredentials: true,
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			onUploadProgress: onProgress,
			signal: controller.signal,
		};

		return axios.post(url, data, config);
	};

	/**
	 * Handles upload progress
	 */
	let progressHandler: (percentage: number) => void;
	const onProgress = (callback: (percentage: number) => void) => {
		progressHandler = callback;
	};

	/**
	 * Handles cancel current upload
	 */
	const controller = new AbortController();
	const abort = () => {
		// Reset offset
		offset = 0;

		// Abort uploading
		controller.abort();

		// Reset progress handler
		if (!progressHandler) return;
		progressHandler(0);
	};

	// Calculate parts
	const { forEach } = usePayloadGenerator(file, options.limit);

	let offset = 0;
	forEach(async (result) => {
		await upload(url, getFormData(result), (event: AxiosProgressEvent) => {
			if (!progressHandler) return;

			// Calculate current upload bytes send
			const loaded = offset + event.loaded;

			// Calculate percentage
			progressHandler(Math.floor((loaded / file.size) * 100));
		});

		// Increase uploaded data offset
		offset += result.blob.size;
	}).catch((error) => {
		console.log(error);
	});

	return { onProgress, abort };
};

export { useUpload };
