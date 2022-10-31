import { Files } from '../../hooks';
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
] as Files;

export const rejectedFile = {
	errors: [{ message: '__ERROR__', code: 'file-too-large' }] as FileError[],
	file: {
		lastModified: 1623407907404,
		name: 'Faalrapport.txt',
		size: 119660,
		type: 'plain.txt',
		webkitRelativePath: '',
	} as File,
} as FileRejection;

export const filesWithRejection = [...files, rejectedFile] as Files;
