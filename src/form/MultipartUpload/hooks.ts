import { usePayloadIterator } from '@bmi-component-library/form/MultipartUpload/PayloadIterator';
import { getHash } from '@bmi-component-library/utils/getHash';

type UploadOptions = {
	limit?: number;
};

const useUpload = async (file: File, options?: UploadOptions) => {
	console.log(file);

	// @todo no limits route
	if (!options?.limit) {
		console.log('There is no upload limit defined');
		return;
	}

	// @todo fits in 1 chunk route
	if (options.limit >= file.size) {
		console.log('The size of the file is within limits');
		return;
	}

	// Calculate parts
	const { forEach } = usePayloadIterator(file, options.limit);
	console.log(`size: ${file.size}, limit: ${options?.limit}`);

	let total = 0;
	await forEach((result) => {
		if (result === null) return;

		total += result.blob.size;
		console.log(`blob: ${result.index}, size: ${result.blob.size}, MD5: ${result.hash}`);
	});

	const hash = await getHash(file);
	console.log(`Chunks total: ${total}, File: ${file.size}, Hash: ${hash}`);
};

export { useUpload };
