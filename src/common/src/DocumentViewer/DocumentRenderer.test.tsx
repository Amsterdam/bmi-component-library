import React from 'react';
import { screen } from '@testing-library/react';
import DocumentRenderer, { imageContentTypes, pdfContentTypes } from './DocumentRenderer';
import { render } from '../../../test-utils/customRender';

describe('<DocumentRenderer />', () => {
	it('renders an alert when no renderer found', () => {
		const uri = '/cannotbeloaded.jpg';
		render(<DocumentRenderer uri={uri} contentType="unknown/unknown" />);

		expect(screen.getByTestId('document-renderer')).toBeInTheDocument();
		expect(screen.getByText('Document kan niet weergegeven worden in de browser.')).toBeInTheDocument();
		expect(screen.getByText('Download')).toBeInTheDocument();
		expect(screen.getByRole('link')).toHaveAttribute('href', uri);
	});

	test.each(imageContentTypes)('renders an img when "%s" is the content type', (contentType) => {
		const uri = '/image.jpg';
		render(<DocumentRenderer uri={uri} contentType={contentType} />);

		expect(screen.getByTestId('document-renderer')).toBeInTheDocument();
		expect(screen.getByRole('img')).toHaveAttribute('src', uri);
		expect(screen.getByRole('img')).toHaveAttribute('alt', 'Afbeelding');
	});

	test.each(pdfContentTypes)('renders an object when "%s" is the content type', (contentType) => {
		const uri = '/document.pdf';
		render(<DocumentRenderer uri={uri} contentType={contentType} />);

		expect(screen.getByTestId('document-renderer')).toBeInTheDocument();
		expect(screen.getByRole('document')).toHaveAttribute('data', uri);
		expect(screen.getByRole('document')).toHaveAttribute('type', contentType);
		expect(screen.getByText('Document kan niet weergegeven worden in de browser.')).toBeInTheDocument();
		expect(screen.getByText('Download')).toBeInTheDocument();
		expect(screen.getByRole('link')).toHaveAttribute('href', uri);
	});
});
