import React from 'react';
import { render } from '../../../test-utils/customRender';
import { screen } from '@testing-library/dom'
import ConfirmDialog, { IState, confirm } from './ConfirmDialog';
import userEvent from '@testing-library/user-event';

describe('<ConfirmDialog hideCloseButton="false"/>', () => {
	let getByTestId: Function;
	let getByText: any;
	const onCancelMock = jest.fn();
	const onConfirmMock = jest.fn();
	const onCloseMock = jest.fn();

	const props = {
		title: 'TestDialog',
		message: 'Are you sure you want to delete this file?',
		textCancelButton: 'Cancel',
		textConfirmButton: 'Confirm',
		onCancel: onCancelMock,
		onConfirm: onConfirmMock,
		onCloseButton: onCloseMock
	} as IState;

	beforeEach(() => {
		({ getByTestId, getByText } = render(
			<div>
				<button data-testid="open-dialog" onClick={() => confirm(props)} />
				<ConfirmDialog hideCloseButton={false}/>
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

	it('should call the onClose function when clicking the closeButton', () => {
		const confirmButton = getByTestId('modal-close-button');
		userEvent.click(confirmButton);
		expect(onCloseMock).toBeCalled();
	});
});

describe('<ConfirmDialog />', () => {
	test('Should not show close button',  () => {
		const props = {
			title: 'TestDialog',
			message: 'Are you sure you want to delete this file?',
			textCancelButton: 'Cancel',
			textConfirmButton: 'Confirm',
			onCancel: jest.fn(),
			onConfirm: jest.fn(),
			onCloseButton: jest.fn()
		} as IState;

		render(
			<div>
				<button data-testid="open-dialog" onClick={() => confirm(props)} />
				<ConfirmDialog />
			</div>);

		const button = screen.getByTestId('open-dialog');
		userEvent.click(button);

		expect(screen.queryByTestId('modal-close-button')).toBeNull();
	})
})
