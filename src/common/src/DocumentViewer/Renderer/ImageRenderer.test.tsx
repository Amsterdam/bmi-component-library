import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '~/tests/helpers/customRender';
import ImageRenderer from './ImageRenderer';

describe('<ImageRenderer />', () => {
	it('renders', () => {
		const uri = 'http://localhost/image.jpg';
		render(<ImageRenderer uri={uri} />);

		expect(screen.getByRole('img')).toHaveAttribute('src', uri);
		expect(screen.getByRole('img')).toHaveAttribute('alt', 'Afbeelding');
	});
});
