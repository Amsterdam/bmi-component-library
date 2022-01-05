// overloaded function for using `mocked(`..`)` with any kind of function
export function mocked<T extends unknown, V extends unknown[]>(item: (...args: V) => T): jest.Mock<T, V>;

export function mocked<T>(item: T): jest.Mock {
	if (!jest.isMockFunction(item)) {
		throw new Error('Argument provided to `mocked(`..`)` is not a Jest mock function');
	}

	return item;
}
