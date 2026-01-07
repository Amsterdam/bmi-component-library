import {FileUpload, FileUploadProps} from '@form/MultipartUpload/FileUpload';

export default { component: FileUpload }

const options: Partial<FileUploadProps> = {
	name: 'single',
	limit: 2048,
	dropZone: {
		text: 'Sleep het bestand in dit vlak. U kunt ook ',
		button: {
			text: 'een bestand of foto selecteren of een foto maken'
		}
	},
}

export const Default = {
	args: options
}

export const Limit4Mb: {args: Partial<FileUploadProps>} = {
	args: {
		...options,
		name: 'single-4mb',
		limit: 4096
	}
}
