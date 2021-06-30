import { renderHook } from '@testing-library/react-hooks';
import { useFileUpload } from './hooks';

const getPostUrl = '__ENDPOINT_URL__';

describe('useFileUpload', () => {
	it('should return the correct entries', () => {
		const { result } = renderHook(() => useFileUpload(() => getPostUrl));

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
});
