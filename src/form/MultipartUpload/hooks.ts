import { md5 } from 'hash-wasm';

type UploadOptions = {
	limit?: number;
};

/**
 * Calculate amount of parts to upload for the given filesize
 *
 * @param size
 * @param limit
 */
const calculateParts = (size: number, limit: number) => Math.ceil(size / limit);

/**
 * Get blob part of the file
 *
 * @param file
 * @param size
 * @param part
 */
const getBlob = (file: File, size: number, part: number): Blob => {
	const start = part === 0 ? 0 : size * part;
	if (start > file.size) throw new Error('Exceeding filesize boundaries');

	return file.slice(start, start + size);
};

/**
 * Calculate the md5 hash of the given blob data
 *
 * @param blob
 */
const getHash = async (blob: Blob) => {
	const buffer = await blob.arrayBuffer();

	return md5(new Uint8Array(buffer));
};

const useUpload = async (file: File, options?: UploadOptions) => {
	console.log(file);

	if (!options?.limit) {
		return;
	}

	// Calculate parts
	const parts = !options?.limit ? 1 : calculateParts(file.size, options.limit);
	console.log(`size: ${file.size}, limit: ${options?.limit}, parts: ${parts}`);

	let total = 0;
	for (let i = 0; i < parts; i++) {
		const blob = getBlob(file, options.limit, i);
		const hash = await getHash(blob);
		total += blob.size;
		console.log(`blob: ${i}, size: ${blob.size}, MD5: ${hash}`);
	}
	console.log(`Chunks total: ${total}, File: ${file.size}`);
};

export { useUpload, calculateParts };
