import { renderHook } from '@testing-library/react-hooks';
import { act, waitFor } from '@testing-library/react';
import { useFileUpload } from './hooks';
import { CustomFileOrRejection } from './hooks';

const getPostUrlMock = jest.fn().mockImplementation(() => Promise.resolve(true));
const getHeadersMock = jest.fn().mockImplementation(() => Promise.resolve({}));
const onFileSuccessMock = jest.fn().mockImplementation(() => Promise.resolve());

const storedFiles = [
	new File(['TEST_1'], 'TEST_1.png', { type: 'image/png' }),
	new File(['TEST_2'], 'TEST_2.png', { type: 'image/png' }),
].map((file, idx) => Object.assign(file, { tmpId: idx })) as CustomFileOrRejection[];

const files = [
	new File(['TEST_3'], 'TEST_3.png', { type: 'image/png' }),
	new File(['TEST_4'], 'TEST_4.png', { type: 'image/png' }),
	new File(['TEST_5'], 'TEST_5.png', { type: 'image/png' }),
];
const headers = {};

describe('useFileUpload', () => {
	afterEach(() => {
		jest.restoreAllMocks();
		jest.clearAllMocks();
	});

	it('should return the correct entries', () => {
		const { result } = renderHook(() => useFileUpload(getPostUrlMock, () => Promise.resolve(headers)));

		const expectedResult = {
			handleOnDrop: () => console.log('handleOnDrop'),
			handleOnCancel: () => console.log('handleOnCancel'),
			handleOnFileRemove: () => console.log('handleOnFileRemove'),
			handleOnRemoveAllFiles: () => console.log('handleOnRemoveAllFiles'),
			files: [],
		};

		expect(Object.keys(result.current)).toEqual(Object.keys(expectedResult));
		expect(result.current.files).toEqual([]);
	});

	test('handleOnDrop', async () => {
		const { result } = renderHook(() =>
			useFileUpload(getPostUrlMock, getHeadersMock, 'POST', storedFiles, 1, onFileSuccessMock),
		);
		act(() => {
			result.current.handleOnDrop(files, []);
		});
		await waitFor(() => {
			expect(getPostUrlMock).toHaveBeenCalledTimes(3);
			expect(getPostUrlMock).nthCalledWith(1, files[0]);
			expect(getPostUrlMock).nthCalledWith(2, files[1]);
			expect(getPostUrlMock).nthCalledWith(3, files[2]);
		});
	});
});
