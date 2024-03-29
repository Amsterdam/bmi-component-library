import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import FileUpload, { FileUploadProps } from './FileUpload';
import { CustomFileOrRejection } from './hooks';

jest.mock('../../utils/isBase64UrlImage');

const defaultProps: FileUploadProps = {
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
		accept: { 'image/png': ['.png'] },
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
	const user = userEvent.setup();

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
			// file.tmpId = 1;

			await user.upload(input, file);

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

		await user.upload(input, files);

		expect(xhrMock.open).toBeCalledWith('POST', 'api/endpoint', true);
		expect(input.files).toHaveLength(2);
		expect(input.files[0]).toStrictEqual(files[0]);
		expect(input.files[1]).toStrictEqual(files[1]);
	});

	it('should be able to pass stored files as a prop to fileList', async () => {
		const storedFiles = [
			new File(['hello'], 'hello.png', { type: 'image/png' }),
			new File(['there'], 'there.png', { type: 'image/png' }),
		].map((file, idx) => Object.assign(file, { tmpId: idx })) as CustomFileOrRejection[];

		const { getByTestId } = render(<FileUpload storedFiles={storedFiles} {...defaultProps} />);
		const fileList: any = getByTestId('file-list');

		expect(fileList).toHaveTextContent('hello');
		expect(fileList).toHaveTextContent('there');
	});

	it('Should handle a click on a filename ', async () => {
		const onFileNameClick = jest.fn();

		const storedFiles = [
			new File(['hello'], 'hello.png', { type: 'image/png' }),
			new File(['there'], 'there.png', { type: 'image/png' }),
		].map((file, idx) => Object.assign(file, { tmpId: idx })) as CustomFileOrRejection[];

		render(<FileUpload storedFiles={storedFiles} {...defaultProps} onFileNameClick={onFileNameClick} />);

		const fileName = screen.getByText(storedFiles[0].name);

		expect(fileName).toBeInTheDocument();

		await user.click(fileName);

		expect(onFileNameClick).toHaveBeenCalledWith(storedFiles[0]);
	});
});
