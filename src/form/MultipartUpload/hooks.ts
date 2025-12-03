import { getHash } from '@bmi-component-library/utils/getHash';
import { usePayloadGenerator } from '@bmi-component-library/form/MultipartUpload/usePayloadGenerator';

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

	// Calculate parts
	const { forEach } = usePayloadGenerator(file, options.limit);
	console.log(`size: ${file.size}, limit: ${options?.limit}`);

	let total = 0;
	await forEach((result) => {
		total += result.blob.size;
		console.log(`blob: ${result.index}, size: ${result.blob.size}, MD5: ${result.hash}`);
	});

	const hash = await getHash(file);
	console.log(`Chunks total: ${total}, File: ${file.size}, Hash: ${hash}`);
};

export { useUpload };
