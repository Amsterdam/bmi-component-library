export async function mockComponentProps<T>(mockedComponent: jest.Mock): Promise<T> {
	return mockedComponent.mock.calls[0][0];
}
