import React from 'react';
import { render } from '@testing-library/react';
import ConfirmDialog from './ConfirmDialog';

describe('<ConfirmDialog/>', () => {
	it('should render correctly', () => {
		const { getByTestId } = render(
			<ConfirmDialog
				title="TestDialog"
				message="Are you sure you would like to delete this file?"
				textCancelButton="Cancel"
				textConfirmButton="Confirm"
				onCancel={jest.fn()}
				onConfirm={jest.fn()}
			/>,
		);
		expect(getByTestId('confirm-dialog')).toBeDefined();
	});
});
