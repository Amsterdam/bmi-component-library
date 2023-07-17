import { ComponentProps } from 'react';
import { screen } from '@testing-library/react';
import DocumentRenderer, { ImageContentTypes, PDFContentTypes } from './DocumentRenderer';
import { render } from '~/tests/helpers/customRender';
import DownloadRenderer from './DownloadRenderer';
import { mockComponentProps, mocked } from '~/tests/helpers';
import ImageRenderer from './ImageRenderer';
import PDFRenderer from './PDFRenderer';

jest.mock('./DownloadRenderer');
jest.mock('./ImageRenderer');
jest.mock('./PDFRenderer');

describe('<DocumentRenderer />', () => {
	it('renders a DownloadRenderer when no renderer found', async () => {
		const renderUri = '/cannotbeloaded.jpg';
		const DownloadRendererMock = mocked(DownloadRenderer);

		render(<DocumentRenderer uri={renderUri} contentType="unknown/unknown" />);
		expect(screen.queryByTestId('download-renderer')).toBeInTheDocument();

		const { uri } = await mockComponentProps<ComponentProps<typeof DownloadRenderer>>(DownloadRendererMock);
		expect(uri).toBe(renderUri);
	});

	test.each(Object.values(ImageContentTypes).filter((v) => isNaN(Number(v))))(
		'renders an img when "%s" is the content type',
		async (contentType) => {
			const renderUri = '/image.jpg';
			const ImageRendererMock = mocked(ImageRenderer);

			render(<DocumentRenderer uri={renderUri} contentType={contentType} />);
			expect(screen.queryByTestId('image-renderer')).toBeInTheDocument();

			const { uri } = await mockComponentProps<ComponentProps<typeof ImageRenderer>>(ImageRendererMock);
			expect(uri).toBe(renderUri);
		},
	);

	test.each(Object.values(PDFContentTypes).filter((v) => isNaN(Number(v))))(
		'renders an object when "%s" is the content type',
		async (contentType) => {
			const renderUri = '/document.pdf';
			const PDFRendererMock = mocked(PDFRenderer);

			render(<DocumentRenderer uri={renderUri} contentType={contentType} />);
			expect(screen.queryByTestId('pdf-renderer')).toBeInTheDocument();

			const { uri } = await mockComponentProps<ComponentProps<typeof PDFRenderer>>(PDFRendererMock);
			expect(uri).toBe(renderUri);
		},
	);
});
