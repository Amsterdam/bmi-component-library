import React from 'react';
import DocumentViewer from './DocumentViewer';
import { act, screen } from '@testing-library/react';
import { render } from '../../../test-utils/customRender';

describe('<DocumentViewer />', () => {
	beforeEach(() => {
		fetchMock.resetMocks();
	});

	it('should render correctly', async () => {
		fetchMock.mockImplementationOnce((): Promise<any> => Promise.resolve({ status: 200 }));

		await act(async () => {
			render(<DocumentViewer uri="/" />);
		});

		expect(await screen.getByTestId('document-viewer')).toBeInTheDocument();
	});
});
