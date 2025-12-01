import { useUpload } from './hooks';

type FileUploadProps = {
	name: string;
	limit: number;
};

const handleChange = (event: React.ChangeEvent<HTMLInputElement>, limit: number) => {
	// Early return, if target or files is null or length is 0
	if (!event.target || !event.target.files) return;

	// Initiate upload
	useUpload(event.target.files[0], {
		limit: limit * 1024, // 2MByte
	});
};
const FileUpload = (props: FileUploadProps) => {
	return (
		<div>
			<input
				id={props.name}
				data-testid={props.name}
				name={props.name}
				type="file"
				onChange={(event) => handleChange(event, props.limit)}
			/>
		</div>
	);
};

export { FileUpload, FileUploadProps };
