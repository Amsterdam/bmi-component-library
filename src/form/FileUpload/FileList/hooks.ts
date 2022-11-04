import { useEffect, useState } from 'react';
import type { MutableRefObject } from 'react';

import { generateBase64FromImageFile } from '../../../utils/';
import type { CustomFileOrRejection } from '../hooks';

export const useBase64PreviewValue = (file: CustomFileOrRejection, mountedRef: MutableRefObject<boolean>) => {
	const [preview, setPreview] = useState<string | undefined>(file.preview);

	useEffect(() => {
		if (preview) return () => {};
		let houseKeeping: Function | null = null;

		if (file && !file.errors && 'undefined' === typeof file.preview) {
			generateBase64FromImageFile(file).then(({ result, readerCleanup }) => {
				if (!mountedRef.current) return null;
				setPreview(result);
				houseKeeping = readerCleanup;
			});
		} else {
			setPreview('');
		}

		return () => {
			mountedRef.current = false;
			if (houseKeeping) houseKeeping();
		};
	}, []);

	return preview;
};
