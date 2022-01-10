import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '~/tests/helpers/customRender';
import PDFRenderer from './PDFRenderer';

describe('<PDFRenderer />', () => {
	it('renders', () => {
		const uri = 'http://localhost/image.jpg';
		render(<PDFRenderer uri={uri} />);

		expect(screen.getByRole('document')).toHaveAttribute('data', uri);
		expect(screen.getByText('Document kan niet weergegeven worden in de browser.')).toBeInTheDocument();
		expect(screen.getByText('Download')).toBeInTheDocument();
		expect(screen.getByRole('link')).toHaveAttribute('href', uri);
	});
});
