import { useUpload } from './hooks';

type FileUploadProps = {};

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	// Early return, if target or files is null or length is 0
	if (!event.target || !event.target.files) return;

	// Initiate upload
	// @TODO move limit into arguments
	useUpload(event.target.files[0], {
		limit: 2048 * 1024, // 2MByte
	});
};
const FileUpload = (props: FileUploadProps) => {
	return (
		<div>
			<input type="file" onChange={handleChange} />
		</div>
	);
};

export { FileUpload, FileUploadProps };
