import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import FileList from './FileList';
import { CustomFile } from '../hooks';

const defaultProps: React.ComponentProps<typeof FileList> = {
	// Combined list of accepted and rejected file records
	files: [
		// Accepted files (only these will be uploaded)
		{
			lastModified: 1623407907404,
			name: 'Stakeholderanalyse.pdf',
			path: 'Stakeholderanalyse.pdf',
			size: 119660,
			type: 'image/png',
			webkitRelativePath: '',
		},
		{
			lastModified: 1623407907304,
			name: 'Migratierapport.pdf',
			path: 'Migratierapport.pdf',
			size: 129654,
			type: 'image/png',
			webkitRelativePath: '',
		},
		// Rejected files
		{
			errors: { message: '__ERROR__', code: 'file-too-large' },
			file: {
				lastModified: 1623407907404,
				name: 'Faalrapport.pdf',
				path: 'Faalrapport.pdf',
				size: 119660,
				type: 'image/png',
				webkitRelativePath: '',
			},
		},
	] as any,
	removeLabel: 'Wissen',
	cancelLabel: 'Annuleren',
	fileUploadErrorLabel: 'dit bestand kan niet worden geüpload',
	fileUploadInProgressLabel: 'wordt geupload',
	onFileRemove: (file: CustomFile) => console.log(file),
	onCancel: (file: CustomFile) => console.log(file),
};

describe('<FileList />', () => {
	it('should render correctly', () => {
		const { getByTestId } = render(<FileList {...defaultProps} />);
		expect(getByTestId('file-list')).toBeDefined();
	});

	it('should list the correct files', () => {
		const { getByText } = render(<FileList {...defaultProps} />);
		expect(getByText('Stakeholderanalyse.pdf')).toBeInTheDocument();
		expect(getByText('Migratierapport.pdf')).toBeInTheDocument();
		expect(getByText('Faalrapport.pdf dit bestand kan niet worden geüpload')).toBeInTheDocument();
	});

	it('should render cancel button and handle event when file uploading is in progress', () => {
		const onCancelMock = jest.fn();
		const filesWithProgress = [
			{
				lastModified: 1623407907404,
				name: 'Stakeholderanalyse.pdf',
				path: 'Stakeholderanalyse.pdf',
				size: 119660,
				type: 'image/png',
				webkitRelativePath: '',
				progress: 50,
			},
		];
		const { getAllByText } = render(
			<FileList {...defaultProps} files={filesWithProgress as any} onCancel={onCancelMock} />,
		);
		const cancelButton = getAllByText('Annuleren')[0];

		expect(cancelButton).toBeInTheDocument();

		fireEvent.click(cancelButton);

		expect(onCancelMock).toHaveBeenCalled();
	});

	it('should render file remove button and handle event', () => {
		const onFileRemoveMock = jest.fn();
		const { getAllByText } = render(<FileList {...defaultProps} onFileRemove={onFileRemoveMock} />);
		const removeFileButton = getAllByText('Wissen')[0];

		expect(removeFileButton).toBeInTheDocument();

		fireEvent.click(removeFileButton);

		expect(onFileRemoveMock).toHaveBeenCalledWith({
			lastModified: 1623407907404,
			name: 'Stakeholderanalyse.pdf',
			path: 'Stakeholderanalyse.pdf',
			size: 119660,
			type: 'image/png',
			webkitRelativePath: '',
		});
		expect(onFileRemoveMock).toHaveBeenCalledTimes(1);
	});
});
