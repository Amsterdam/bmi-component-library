import { screen } from '@testing-library/react';
import { render } from '~/tests/helpers/customRender';
import DownloadRenderer from './DownloadRenderer';

describe('<DownloadRenderer />', () => {
	it('renders', () => {
		const uri = 'http://localhost/download.png';
		render(<DownloadRenderer uri={uri} />);

		expect(screen.getByRole('alert')).toBeInTheDocument();
		expect(screen.getByText('Document kan niet weergegeven worden in de browser.')).toBeInTheDocument();
		expect(screen.getByText('Download')).toBeInTheDocument();
		expect(screen.getByRole('link')).toHaveAttribute('href', uri);
	});
});
