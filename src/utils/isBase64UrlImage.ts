export const isBase64UrlImage = async (base64String: string) => {
	const image = new Image();
	image.src = base64String;
	return new Promise<boolean>((resolve) => {
		image.onload = function () {
			resolve([image.height, image.width].includes(0) ? false : true);
		};
		image.onerror = () => {
			resolve(false);
		};
	});
};
