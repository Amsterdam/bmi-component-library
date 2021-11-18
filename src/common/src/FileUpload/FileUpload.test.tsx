import React from 'react';
import { act, render } from '@testing-library/react';
import FileUpload, { Props } from './FileUpload';
import userEvent from '@testing-library/user-event';
import { CustomFileOrRejection } from './hooks';

const defaultProps: Props = {
	getPostUrl: () => Promise.resolve('api/endpoint'),
	getHeaders: () => Promise.resolve({}),
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

function mockXHR(responseText: string = '[]', status: number = 200) {
	const xhrMock = {
		open: jest.fn(),
		setRequestHeader: jest.fn(),
		onreadystatechange: jest.fn(),
		send: jest.fn(),
		readyState: 4,
		upload: jest.fn(),
		responseText,
		status,
	};
	// @ts-ignore
	window.XMLHttpRequest = jest.fn(() => {
		return xhrMock;
	});

	return xhrMock;
}

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

	test.each([['POST'], ['PUT']])(
		'should be able to upload a single file using the "%s" http method',
		async (httpMethod) => {
			const xhrMock = mockXHR('[]');
			const { getByTestId } = render(<FileUpload {...defaultProps} httpMethod={httpMethod as 'PUT' | 'POST'} />);
			const input: any = getByTestId('file-upload__input');
			const file = new File(['hello'], 'hello.png', { type: 'image/png' });

			await act(async () => {
				userEvent.upload(input, file);
			});

			expect(xhrMock.open).toBeCalledWith(httpMethod, 'api/endpoint', true);
			expect(input.files[0]).toStrictEqual(file);
			expect(input.files.item(0)).toStrictEqual(file);
			expect(input.files).toHaveLength(1);
		},
	);

	it('should be able to upload multiple files', async () => {
		const xhrMock = mockXHR('[]');
		const { getByTestId } = render(<FileUpload {...defaultProps} />);
		const input: any = getByTestId('file-upload__input');
		const files = [
			new File(['hello'], 'hello.png', { type: 'image/png' }),
			new File(['there'], 'there.png', { type: 'image/png' }),
		];

		await act(async () => {
			userEvent.upload(input, files);
		});

		expect(xhrMock.open).toBeCalledWith('POST', 'api/endpoint', true);
		expect(input.files).toHaveLength(2);
		expect(input.files[0]).toStrictEqual(files[0]);
		expect(input.files[1]).toStrictEqual(files[1]);
	});

	it('should be able to pass stored files as a prop to fileList', async () => {
		const storedFiles = [
			new File(['hello'], 'hello.png', { type: 'image/png' }),
			new File(['there'], 'there.png', { type: 'image/png' }),
		] as CustomFileOrRejection[];

		const { getByTestId } = render(<FileUpload storedFiles={storedFiles} {...defaultProps} />);
		const fileList: any = getByTestId('file-list');

		expect(fileList).toHaveTextContent('hello');
		expect(fileList).toHaveTextContent('there');
	});
});
