type UploadOptions = {
	limit?: number;
};
const calculateParts = (size: number, limit: number) => Math.ceil(size / limit);
const useUpload = (file: File, options?: UploadOptions) => {
	console.log(file);

	// Calculate parts
	const parts = !options?.limit ? 1 : calculateParts(file.size, options.limit);
	console.log(`size: ${file.size}, limit: ${options?.limit}, parts: ${parts}`);
};

export { useUpload, calculateParts };
