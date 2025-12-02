import { getHash } from '@bmi-component-library//utils/getHash';

type PayloadResult = {
	blob: Blob;
	hash: string;
	index: number;
};

type PayloadIteratorItem = {
	value: PayloadResult | null;
	done: boolean;
};

/**
 * Calculate amount of parts to upload for the given filesize
 *
 * @param size
 * @param limit
 */
const calculateParts = (size: number, limit: number): number => {
	return Math.ceil(size / limit);
};

class PayloadIterator {
	private file: File;
	private currentIndex: number;
	private limit: number = 0;
	private parts: number = 0;

	constructor(file: File, limit: number) {
		this.file = file;
		this.currentIndex = 0;
		this.setLimit(limit);
	}

	public async next(): Promise<PayloadIteratorItem> {
		if (this.currentIndex >= this.parts) {
			return { value: null, done: true };
		}

		const blob = this.getBlob();
		const hash = await getHash(blob);

		// Increase index position
		this.currentIndex++;

		return { value: { blob, hash, index: this.currentIndex }, done: false };
	}

	public setLimit(limit: number) {
		this.limit = limit;

		// Define the amount of parts we need to upload this file
		this.parts = calculateParts(this.file.size, limit);
	}

	public getParts(): number {
		return this.parts;
	}

	/**
	 * Get blob part of the file
	 */
	getBlob = (): Blob => {
		const start = this.currentIndex === 0 ? 0 : this.limit * this.currentIndex;

		return this.file.slice(start, start + this.limit);
	};

	public reset() {
		this.currentIndex = 0;
	}

	public async forEach(callback: (value: PayloadResult) => void) {
		const result = await this.next();

		// Exit when end is reached
		if (result.done || result.value === null) {
			return;
		}

		await callback(result.value);
		await this.forEach(callback);
	}
}

export { PayloadIterator, PayloadResult, calculateParts };
