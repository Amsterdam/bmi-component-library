import { getHash } from '@bmi-component-library//utils/getHash';
import { IteratorInterface, IteratorItem, useIterator } from '@bmi-component-library/form/MultipartUpload/Iterator';

type PayloadResult = {
	blob: Blob;
	hash: string;
	index: number;
};

type PayloadIterator = IteratorInterface<PayloadResult> & { getBlob: (index: number) => Blob };

const calculateParts = (size: number, limit: number) => Math.ceil(size / limit);

/**
 * Returns a chunk iterator for a file, splitting it into parts of the given size.
 * Each chunk includes the blob, MD5 hash, and its index.
 */
const usePayloadIterator = (file: File, limit: number): PayloadIterator => {
	/**
	 * Returns the next payload chunk to upload, including its Blob, MD5 hash, and index.
	 *
	 * If all chunks have been processed, returns { value: null, done: true }.
	 */
	const iterator = useIterator<PayloadResult>(
		async (index: number, setIndex): Promise<IteratorItem<PayloadResult>> => {
			if (index >= parts) {
				return { value: null, done: true };
			}

			const blob = getBlob(index);
			const hash = await getHash(blob);

			const result: PayloadResult = { blob, hash, index };

			// Increase index position
			setIndex(index + 1);
			return { value: result, done: false };
		},
	);

	/**
	 * Returns the current chunk of the file as a Blob, based on the current index and limit.
	 */
	const getBlob = (index: number): Blob => {
		const start = index === 0 ? 0 : limit * index;

		return file.slice(start, start + limit);
	};

	// Calculate the parts needed to complete upload the selected file
	const parts = calculateParts(file.size, limit);

	return { ...iterator, getBlob };
};

export { usePayloadIterator, PayloadResult, calculateParts };
