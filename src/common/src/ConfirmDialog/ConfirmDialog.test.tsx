import React from 'react';
import { render } from '../../../test-utils/customRender';
import ConfirmDialog, { IState, confirm } from './ConfirmDialog';
import userEvent from '@testing-library/user-event';

describe('<ConfirmDialog/>', () => {
	let getByTestId: Function;
	let getByText: any;
	const onCancelMock = jest.fn();
	const onConfirmMock = jest.fn();

	const props = {
		title: 'TestDialog',
		message: 'Are you sure you want to delete this file?',
		textCancelButton: 'Cancel',
		textConfirmButton: 'Confirm',
		onCancel: onCancelMock,
		onConfirm: onConfirmMock,
	} as IState;

	beforeEach(() => {
		({ getByTestId, getByText } = render(
			<div>
				<button data-testid="open-dialog" onClick={() => confirm(props)} />
				<ConfirmDialog />
			</div>,
		));
		const button = getByTestId('open-dialog');
		userEvent.click(button);
	});

	afterEach(() => {
		jest.resetAllMocks();
	});

	it('should render the ConfirmDialog correctly', () => {
		expect(getByText('TestDialog')).toBeInTheDocument();
		expect(getByText('Are you sure you want to delete this file?')).toBeInTheDocument();
		expect(getByText('Cancel')).toBeInTheDocument();
		expect(getByText('Confirm')).toBeInTheDocument();
	});

	it('should call the onCancel function when clicking the cancelButton', () => {
		const cancelButton = getByTestId('cancel-button');
		userEvent.click(cancelButton);
		expect(onCancelMock).toBeCalled();
	});

	it('should call the onConfirm function when clicking the confirmButton', () => {
		const confirmButton = getByTestId('confirm-button');
		userEvent.click(confirmButton);
		expect(onConfirmMock).toBeCalled();
	});
});
