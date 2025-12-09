import { getHash } from '@amsterdam/bmi-component-library/utils/getHash';

type PayloadResult = {
	fileName: string;
	blob: Blob;
	hash: string;
	progress: {
		current: number;
		total: number;
	};
};

/**
 * Returns a chunk generator for a file, splits it into parts of the given size.
 * Each chunk includes the blob, MD5 hash, and its index.
 */
const usePayloadGenerator = (file: File, limit: number) => {
	/**
	 * Returns the current chunk of the file as a Blob, based on the current index and limit.
	 */
	const getBlob = (index: number): Blob => {
		const start = limit * index;

		return file.slice(start, start + limit);
	};

	// Calculate the parts needed to complete upload the selected file
	const parts = Math.ceil(file.size / limit);

	/**
	 * Returns the next payload chunk to upload, including its Blob, MD5 hash, and index.
	 */
	async function* blobs(): AsyncGenerator<PayloadResult> {
		for (let index = 0; index < parts; index++) {
			const blob = getBlob(index);
			const hash = await getHash(blob);

			yield { fileName: file.name, blob, hash, progress: { current: index + 1, total: parts } };
		}
	}

	/**
	 * Iterates over all remaining chunks in the file, invoking the callback for each chunk.
	 *
	 * @param callback - Async or sync function called with each PayloadResult.
	 */
	const forEach = async (callback: (value: PayloadResult) => void) => {
		for await (const value of blobs()) {
			await callback(value);
		}
	};

	return { forEach, getBlob, [Symbol.asyncIterator]: blobs };
};

export { usePayloadGenerator, PayloadResult };
