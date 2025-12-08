jest.mock('@bmi-component-library/utils/getHash');
import { getHash } from '@bmi-component-library/utils/getHash';
import { usePayloadGenerator } from '@bmi-component-library/form/MultipartUpload/usePayloadGenerator';

describe('PayloadGenerator', () => {
	beforeEach(() => jest.clearAllMocks());

	describe('iterator', () => {
		it('should support direct async iteration', async () => {
			const iterator = usePayloadGenerator(new File([new Uint8Array(3500)], 'small.bin'), 1000);
			const items = [];
			for await (const blob of iterator) {
				items.push(blob);
			}
			expect(items.length).toBe(4);
		});
	});

	describe('getBlob', () => {
		/**
		 * Test for every index the expected blob size
		 */
		const dataSet: { index: number; expectedValue: number }[] = [
			{ index: 0, expectedValue: 2 },
			{ index: 1, expectedValue: 2 },
			{ index: 2, expectedValue: 1 },
			{ index: 3, expectedValue: 0 },
		];
		it.each(dataSet)('should return blob, of expected size', ({ index, expectedValue }) => {
			const { getBlob } = usePayloadGenerator(new File(['hello'], 'test.txt'), 2);

			const result = getBlob(index);
			expect(result.size).toEqual(expectedValue);
		});
	});

	describe('forEach', () => {
		it('should iterate over file blob parts', async () => {
			const expectedSize = 6000;
			const blobSize = 1024;
			const { forEach } = usePayloadGenerator(new File([new Uint8Array(expectedSize)], 'test.bin'), blobSize);
			const callback = jest.fn();

			// Execute and gather all blob sizes
			const sizes: number[] = [];
			await forEach((value) => {
				callback();
				sizes.push(value.blob.size);
			});

			// Expecting 6 blob parts from the given file
			expect(callback).toHaveBeenCalledTimes(6);

			// Expecting the summed blob size to equal filesize
			expect(sizes.reduce((total, item) => total + item, 0)).toBe(expectedSize);

			// Expect last chunk to be partial
			expect(sizes.pop()).toBe(expectedSize % blobSize);

			// Expects last chunk to be partial
			for (const size of sizes) {
				expect(size).toBe(blobSize);
			}
		});

		it('should yield correct index for each blob', async () => {
			const { forEach } = usePayloadGenerator(new File([new Uint8Array(5000)], 'small.bin'), 1000);

			const indexList: number[] = [];
			await forEach(({ progress }) => indexList.push(progress.current));

			expect(indexList).toEqual([0, 1, 2, 3, 4]);
		});

		it('should return zero blobs for an empty file', async () => {
			const { forEach } = usePayloadGenerator(new File([], 'empty.txt'), 1000);
			const callback = jest.fn();

			await forEach(callback);

			expect(callback).not.toHaveBeenCalled();
		});

		it('should return 1 blob if limit is greater than the file size', async () => {
			const { forEach } = usePayloadGenerator(new File([new Uint8Array(5000)], 'small.bin'), 10000);
			const callback = jest.fn();

			await forEach(callback);

			expect(callback).toHaveBeenCalledTimes(1);
		});

		it('should call getHash only once per blob', async () => {
			const { forEach } = usePayloadGenerator(new File([new Uint8Array(5000)], 'small.bin'), 1000);

			await forEach(() => {});

			expect(getHash).toHaveBeenCalledTimes(5);
		});
	});
});
