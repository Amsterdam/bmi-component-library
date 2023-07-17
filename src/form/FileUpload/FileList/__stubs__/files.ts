import { Files, CustomFile } from '../../hooks';
import { FileError, FileRejection } from 'react-dropzone';

export const files = [
	// Accepted files (only these will be uploaded)
	{
		lastModified: 1623407907404,
		name: 'Stakeholderanalyse.pdf',
		size: 119660,
		type: 'application/pdf',
		webkitRelativePath: '',
	},
	{
		lastModified: 1623407907304,
		name: 'Migratierapport.pdf',
		size: 129654,
		type: 'application/pdf',
		webkitRelativePath: '',
	},
	{
		lastModified: 1623407907204,
		name: '1px.png',
		size: 119660,
		type: 'image/png',
		webkitRelativePath: '',
		preview:
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAMSURBVBhXY/j//z8ABf4C/qc1gYQAAAAASUVORK5CYII=',
	},
] as CustomFile[];

export const rejectedFile: FileRejection = {
	errors: [{ message: '__ERROR__', code: 'file-too-large' }] as FileError[],
	file: {
		lastModified: 1623407907404,
		name: 'Faalrapport.txt',
		size: 119660,
		type: 'plain.txt',
		webkitRelativePath: '',
	} as File,
};

export const filesWithRejection = [...files, rejectedFile] as Files;
