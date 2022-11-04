import { isBase64UrlImage } from './isBase64UrlImage';

/**
 *
 * Generates a base64 string from the given file (mime type must be image/*)
 * The returned readerCleanup function should be called when a component unmounts
 *
 * @example
 * const ExampleComponent = ({file: File}) => {
 *     const { result, readerCleanup } = generateBase64FromImageFile(file);
 *     useEffect(() => {
 *       return () => {
 *          readerCleanup();
 *      }
 *    }, []);
 *    return <img src={result} />
 * }
 *
 */
export const generateBase64FromImageFile = (file: File) =>
	new Promise<{ result: string; readerCleanup: () => void }>((resolve) => {
		const reader = new FileReader();

		const readerCleanup = () => {
			reader && reader.abort();
		};

		if (file && file.type.startsWith('image')) {
			reader.onload = async () => {
				const base64String = reader.result as string;
				const isImage = await isBase64UrlImage(base64String);
				resolve({ result: isImage ? base64String : '', readerCleanup });
			};
			reader.onerror = (e) => {
				resolve({ result: '', readerCleanup });
			};
			try {
				reader.readAsDataURL(file);
			} catch (e) {
				return resolve({ result: '', readerCleanup });
			}
		}
	});
