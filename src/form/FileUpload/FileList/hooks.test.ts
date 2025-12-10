import { renderHook, waitFor } from '@testing-library/react';
import { useBase64PreviewValue } from './hooks';
import { CustomFileOrRejection } from '@form/FileUpload/hooks';

jest.mock('@utils/generateBase64FromImageFile');

const createCustomFileOrRejection = (
	file: File,
	override: Partial<CustomFileOrRejection> = {},
): CustomFileOrRejection => {
	return {
		name: file.name,
		tmpId: override.tmpId ?? -1,
		file: file,
		lastModified: file.lastModified,
		size: file.size,
		type: file.type,
		arrayBuffer: override.arrayBuffer ?? (() => Promise.resolve(new ArrayBuffer())),
		webkitRelativePath: file.webkitRelativePath,
		bytes: file.bytes,
		slice: file.slice,
		stream: file.stream,
		text: file.text,
		errors: override.errors ?? [],
		preview: override.preview,
	};
};

const rejectedFile = createCustomFileOrRejection(new File(['TEST_6'], 'TEST_6.png', { type: 'image/png' }), {
	errors: [{ message: '__ERROR__', code: 'file-too-large' }],
});

const imageFile = createCustomFileOrRejection(new File(['TEST_7'], 'TEST_7.png', { type: 'image/png' }));

const nonImageFile = createCustomFileOrRejection(new File(['TEST_8'], 'TEST_8.txt', { type: 'text/plain' }));

const imageFileWithPreview = createCustomFileOrRejection(new File(['TEST_9'], 'TEST_9.png', { type: 'image/png' }), {
	preview: 'TEST_9_PREVIEW',
});

describe.skip('useBase64PreviewValue', () => {
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
