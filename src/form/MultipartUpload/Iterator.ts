type IteratorItem<T> = {
	value: T | null;
	done: boolean;
};

interface IteratorInterface<T> {
	readonly currentIndex: number;
	next: (index: number, setIndex: (value: number) => void) => Promise<IteratorItem<T>>;
	reset: () => void;
	forEach: (callback: (value: T | null) => void) => void;
	[Symbol.asyncIterator](): void;
}

const useIterator = <T>(
	nextFn: (index: number, setIndex: (value: number) => void) => Promise<IteratorItem<T>>,
): IteratorInterface<T> => {
	let current = 0;

	/**
	 * Change the state of the index
	 *
	 * @param value
	 */
	const setIndex = (value: number) => (current = value);

	/**
	 * Resets the iterator back to the first chunk (index 0).
	 */
	const reset = () => setIndex(0);

	/**
	 * Wrapper for the next function
	 */
	const next = () => nextFn(current, setIndex);

	/**
	 * Create iterator object
	 */
	const iterator = {
		get currentIndex() {
			return current;
		},
		next,
		reset,
		[Symbol.asyncIterator]() {
			return this;
		},
	};

	/**
	 * Iterates over all remaining chunks in the file, invoking the callback for each chunk.
	 *
	 * @param callback - Async or sync function called with each PayloadResult.
	 */
	const forEach = async (callback: (value: T | null) => void) => {
		for await (const value of iterator) {
			await callback(value);
		}
	};

	return { ...iterator, forEach };
};

export { useIterator, IteratorItem, IteratorInterface };
