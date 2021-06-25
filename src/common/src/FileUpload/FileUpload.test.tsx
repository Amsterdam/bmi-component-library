import React from 'react';
import { render } from '@testing-library/react';
import FileUpload from './FileUpload';
import userEvent from '@testing-library/user-event';

const defaultProps: React.ComponentProps<typeof FileUpload> = {
	getPostUrl: () => 'api/endpoint',
	placeholder: 'Sleep de bestanden in dit vlak of',
	droppingLabel: 'bestanden geselecteerd',
	selectFilesLabel: 'selecteer bestanden',
	removeLabel: 'Wissen',
	cancelLabel: 'Annuleren',
	fileUploadErrorLabel: 'dit bestand kan niet worden geüpload',
	fileUploadInProgressLabel: 'wordt geupload',
	options: {
		noClick: true,
		noKeyboard: true,
		accept: 'image/png',
	},
};

describe('<FileUpload />', () => {
	beforeAll(() => {
		Object.defineProperty(window, 'matchMedia', {
			writable: true,
			value: jest.fn().mockImplementation((query) => ({
				matches: false,
				media: query,
				onchange: null,
				addListener: jest.fn(), // Deprecated
				removeListener: jest.fn(), // Deprecated
				addEventListener: jest.fn(),
				removeEventListener: jest.fn(),
				dispatchEvent: jest.fn(),
			})),
		});
	});

	beforeEach(() => jest.clearAllMocks());

	it('should render correctly', () => {
		const { getByTestId } = render(<FileUpload {...defaultProps} />);
		expect(getByTestId('file-upload')).toBeDefined();
	});

	it('should render all the labels', () => {
		const { getByText } = render(<FileUpload {...defaultProps} />);
		expect(getByText('Sleep de bestanden in dit vlak of')).toBeInTheDocument();
		expect(getByText('selecteer bestanden')).toBeInTheDocument();
	});

	it('should not render a file list if there arent any files', () => {
		const { queryByText } = render(<FileUpload {...defaultProps} />);
		expect(queryByText('Wissen')).not.toBeInTheDocument();
		expect(queryByText('Annuleren')).not.toBeInTheDocument();
	});

	it('should be able to upload a single file', () => {
		const { getByTestId } = render(<FileUpload {...defaultProps} />);
		const input: any = getByTestId('file-upload__input');
		const file = new File(['hello'], 'hello.png', { type: 'image/png' });

		userEvent.upload(input, file);

		expect(input.files[0]).toStrictEqual(file);
		expect(input.files.item(0)).toStrictEqual(file);
		expect(input.files).toHaveLength(1);
	});

	it('should be able to upload multiple files', () => {
		const { getByTestId } = render(<FileUpload {...defaultProps} />);
		const input: any = getByTestId('file-upload__input');
		const files = [
			new File(['hello'], 'hello.png', { type: 'image/png' }),
			new File(['there'], 'there.png', { type: 'image/png' }),
		];

		userEvent.upload(input, files);

		expect(input.files).toHaveLength(2);
		expect(input.files[0]).toStrictEqual(files[0]);
		expect(input.files[1]).toStrictEqual(files[1]);
	});
});
