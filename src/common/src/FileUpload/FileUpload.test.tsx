import React from 'react';
import { render } from '@testing-library/react';
import FileUpload from './FileUpload';

const defaultProps: React.ComponentProps<typeof FileUpload> = {
	postUrl: 'api/endpoint',
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
	describe('Custom implementation ', () => {
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
			const { getByText } = render(<FileUpload {...defaultProps} />);
			expect(getByText('Sleep de bestanden in dit vlak of')).toBeInTheDocument();
			expect(getByText('selecteer bestanden')).toBeInTheDocument();
		});
	});
});
