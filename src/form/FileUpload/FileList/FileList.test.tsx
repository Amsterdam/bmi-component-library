import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FileList, { FileListProps } from './FileList';
import { CustomFile } from '../hooks';
import { filesWithRejection } from './__stubs__/files';

jest.mock('../../../utils/isBase64UrlImage');

const defaultProps: FileListProps = {
	// Combined list of accepted and rejected file records
	files: filesWithRejection,
	removeLabel: 'Wissen',
	cancelLabel: 'Annuleren',
	fileUploadErrorLabel: 'dit bestand kan niet worden geüpload',
	fileUploadInProgressLabel: 'wordt geupload',
	onFileRemove: (file: CustomFile) => console.log(file),
	onCancel: (file: CustomFile) => console.log(file),
};

describe('<FileList />', () => {
	const user = userEvent.setup();

	it('should render correctly', () => {
		render(<FileList {...defaultProps} />);
		expect(screen.getByTestId('file-list')).toBeDefined();
	});

	it('should list the correct files', () => {
		render(<FileList {...defaultProps} />);
		expect(screen.getByText(filesWithRejection[0].name)).toBeInTheDocument();
		expect(screen.getByText(filesWithRejection[1].name)).toBeInTheDocument();
		expect(screen.getByText(filesWithRejection[2].name)).toBeInTheDocument();
		expect(screen.getAllByTestId('file-list-item')).toHaveLength(filesWithRejection.length);
		const error = screen.getByTestId('file-list-item-error');
		expect(error).toBeInTheDocument();
		expect(error.textContent).toContain(defaultProps.fileUploadErrorLabel);
		expect(error.textContent).toContain(filesWithRejection[3].file.name);
	});

	it('should render the expected preview when available in the file object', () => {
		render(<FileList {...defaultProps} />);
		const image = screen.getByAltText(filesWithRejection[2].name);
		expect(image).toBeInTheDocument;
		expect(image.getAttribute('src')).toEqual(filesWithRejection[2].preview);
	});

	it('should render cancel button and handle event when file uploading is in progress', async () => {
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
				tmpId: 4,
			},
		];
		render(<FileList {...defaultProps} files={filesWithProgress as any} onCancel={onCancelMock} />);

		const cancelButton = screen.getByText(defaultProps.cancelLabel);

		expect(cancelButton).toBeInTheDocument();

		await user.click(cancelButton);

		expect(onCancelMock).toHaveBeenCalled();
	});

	it('should render file remove button and handle event', async () => {
		const onFileRemoveMock = jest.fn();

		render(<FileList {...defaultProps} onFileRemove={onFileRemoveMock} />);

		const removeFileButton = screen.getAllByText('Wissen')[0];

		expect(removeFileButton).toBeInTheDocument();

		await user.click(removeFileButton);

		expect(onFileRemoveMock).toHaveBeenCalledWith(filesWithRejection[0]);

		expect(onFileRemoveMock).toHaveBeenCalledTimes(1);
	});

	it('Should handle on filename click', async () => {
		const onFileNameClick = jest.fn();

		render(<FileList {...defaultProps} onFileNameClick={onFileNameClick} />);

		const fileName = screen.getByText(filesWithRejection[0].name);

		expect(fileName).toBeInTheDocument();

		await user.click(fileName);

		expect(onFileNameClick).toHaveBeenCalledWith(filesWithRejection[0]);
	});
});
