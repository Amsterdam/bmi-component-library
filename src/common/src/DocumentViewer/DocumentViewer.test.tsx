import React from 'react';
import DocumentViewer from './DocumentViewer';
import { act, screen, waitFor } from '@testing-library/react';
import { render } from '~/tests/helpers/customRender';

describe('<DocumentViewer />', () => {
	beforeEach(() => {
		fetchMock.resetMocks();
	});

	it('should render an error message when document not found', async () => {
		fetchMock.mockImplementationOnce(
			(): Promise<Response> => Promise.resolve({ ok: false, status: 404 } as Response),
		);

		await act(async () => {
			render(<DocumentViewer uri="/notfound.jpg" />);
		});

		expect(screen.getByTestId('document-viewer')).toBeInTheDocument();
		expect(screen.getByRole('alert').textContent).toBe('Document niet gevonden.');
	});

	it('should render an error message when document not found and filename is not in url', async () => {
		fetchMock.mockImplementationOnce(
			(): Promise<Response> => Promise.resolve({ ok: false, status: 404 } as Response),
		);

		await act(async () => {
			render(<DocumentViewer uri="/" />);
		});

		expect(screen.getByTestId('document-viewer')).toBeInTheDocument();
		expect(screen.getByRole('alert').textContent).toBe('Document niet gevonden.');
	});

	it('should render an error message when document cannot be loaded', async () => {
		fetchMock.mockImplementationOnce(
			(): Promise<Response> => Promise.resolve({ ok: false, status: 500 } as Response),
		);

		await act(async () => {
			render(<DocumentViewer uri="/cannotbeloaded.jpg" />);
		});

		expect(screen.getByTestId('document-viewer')).toBeInTheDocument();
		expect(screen.getByRole('alert').textContent).toBe('Fout bij het ophalen.');
	});

	it('should render an error message with image document and no content-type', async () => {
		fetchMock.mockImplementationOnce(
			(): Promise<Response> => Promise.resolve({ headers: new Headers(), ok: true } as Response),
		);

		await act(async () => {
			render(<DocumentViewer uri="/image.jpg" />);
		});

		expect(screen.getByTestId('document-viewer')).toBeInTheDocument();
		expect(screen.getByRole('alert').textContent).toBe('Fout bij het ophalen.');
	});

	it('should render with image document', async () => {
		fetchMock.mockImplementationOnce(
			(): Promise<Response> =>
				Promise.resolve({
					headers: new Headers({
						'content-type': 'image/jpg',
						'content-disposition': 'attachment; filename="image.jpg"',
					}),
					ok: true,
				} as Response),
		);

		await act(async () => {
			render(<DocumentViewer uri="/image.jpg" />);
		});

		expect(screen.getByTestId('document-viewer')).toBeInTheDocument();
		expect(screen.queryByText('image.jpg')).toBeInTheDocument();
		expect(screen.getByRole('img')).toBeInTheDocument();
	});

	it('should render and calls callback on failure', async () => {
		fetchMock.mockImplementationOnce(
			(): Promise<Response> => Promise.resolve({ ok: false, status: 500 } as Response),
		);

		const onFailure = jest.fn();

		await act(async () => {
			render(<DocumentViewer uri="/image.jpg" onFailure={onFailure} />);
		});

		expect(onFailure).toHaveBeenCalledWith(expect.objectContaining({ message: 'Fout bij het ophalen.' }));
	});

	it('should render loader when image document is loading', async () => {
		fetchMock.mockImplementationOnce(
			(): Promise<Response> =>
				new Promise((resolve) => {
					setTimeout(resolve, 100);
				}),
		);
		render(<DocumentViewer uri="/image.jpg" />);

		await waitFor(() => {
			expect(screen.getByTestId('spinner')).toBeInTheDocument();
		});
	});
});
