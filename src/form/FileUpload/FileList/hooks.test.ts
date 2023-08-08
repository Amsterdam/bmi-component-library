import { renderHook, waitFor } from '@testing-library/react';
import { useBase64PreviewValue } from './hooks';
import { CustomFileOrRejection } from '../hooks';

jest.mock('../../../utils/generateBase64FromImageFile');

const rejectedFile = {
	errors: [{ message: '__ERROR__', code: 'file-too-large' }],
	file: new File(['TEST_6'], 'TEST_6.png', { type: 'image/png' }),
} as CustomFileOrRejection;

const imageFile = new File(['TEST_7'], 'TEST_7.png', { type: 'image/png' }) as CustomFileOrRejection;

const nonImageFile = new File(['TEST_8'], 'TEST_8.txt', { type: 'text/plain' }) as CustomFileOrRejection;

const imageFileWithPreview = new File(['TEST_9'], 'TEST_9.png', { type: 'image/png' }) as CustomFileOrRejection;
imageFileWithPreview.preview = 'TEST_9_PREVIEW';

describe('useBase64PreviewValue', () => {
	it('should return the expected preview with an image file', async () => {
		const { result } = renderHook(() => useBase64PreviewValue(imageFile, { current: true }));
		expect(result.current).toBeUndefined();

		await waitFor(() => {
			expect(result.current).toEqual('');
		});
	});

	it('should return the existing preview with an image file', async () => {
		const { result } = renderHook(() => useBase64PreviewValue(imageFileWithPreview, { current: true }));
		expect(result.current).toEqual(imageFileWithPreview.preview);
	});

	// Todo
	it.skip('should call internal houskeeping on umount', async () => {
		const { result } = renderHook(() => useBase64PreviewValue(imageFile, { current: true }));
		expect(result.current).toBeUndefined();
	});

	it('should return the expected preview with an txt file', async () => {
		const { result } = renderHook(() => useBase64PreviewValue(nonImageFile, { current: true }));
		expect(result.current).toBeUndefined();

		await waitFor(() => {
			expect(result.current).toEqual('');
		});
	});

	it('should return the expected preview with a rejected file', async () => {
		const { result } = renderHook(() => useBase64PreviewValue(rejectedFile, { current: true }));
		expect(result.current).toEqual('');
	});
});
