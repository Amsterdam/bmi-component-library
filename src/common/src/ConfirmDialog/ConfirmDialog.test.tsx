import React from 'react';
import { render } from '../../../test-utils/customRender';
import ConfirmDialog from './ConfirmDialog';
import userEvent from '@testing-library/user-event';

describe('<ConfirmDialog/>', () => {
	let getByTestId: Function;
	let getByText: any;
	const onCancelMock = jest.fn();
	const onConfirmMock = jest.fn();

	function mount() {
		({ getByTestId, getByText } = render(
			<ConfirmDialog
				title="TestDialog"
				message="Are you sure you want to delete this file?"
				textCancelButton="Cancel"
				textConfirmButton="Confirm"
				onCancel={onCancelMock}
				onConfirm={onConfirmMock}
			/>,
		));
	}

	it('should render the ConfirmDialog correctly', () => {
		mount();
		expect(getByText('TestDialog')).toBeInTheDocument();
		expect(getByText('Are you sure you want to delete this file?')).toBeInTheDocument();
		expect(getByText('Cancel')).toBeInTheDocument();
		expect(getByText('Confirm')).toBeInTheDocument();
	});

	it('should call the onCancel function when clicking the cancelButton', () => {
		mount();
		const modal = getByTestId('modal');
		const cancelButton = getByTestId('cancel-button');
		userEvent.click(cancelButton);
		expect(onCancelMock).toBeCalled();
		expect(modal).not.toBeInTheDocument();
	});

	it('should call the onConfirm function when clicking the confirmButton', () => {
		mount();
		const modal = getByTestId('modal');
		const confirmButton = getByTestId('confirm-button');
		userEvent.click(confirmButton);
		expect(onConfirmMock).toBeCalled();
		expect(modal).not.toBeInTheDocument();
	});
});
