export function mockComponentProps<T>(mockedComponent: jest.Mock): T {
	return mockedComponent.mock.calls[0][0];
}
