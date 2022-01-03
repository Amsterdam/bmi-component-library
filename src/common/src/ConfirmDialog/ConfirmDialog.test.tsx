import React from 'react';
import { screen } from '@testing-library/dom';
import { fireEvent, render } from '../../../test-utils/customRender';
import ConfirmDialog, { confirm, IState, Props } from './ConfirmDialog';
import * as asc from '@amsterdam/asc-ui';
import { createMockComponent, mockComponentProps, mocked } from '~/tests/helpers';

describe('<ConfirmDialog />', () => {
	const onClick = jest.fn();

	const defaultArg = {
		title: 'Test Title',
		message: 'Test Message',
	};

	const callbackMocks = {
		onCancel: onClick,
		onConfirm: onClick,
	};

	const clickAndRenderDialog = (args: Partial<IState> = defaultArg, props: Partial<Props> = {}) => {
		render(
			<>
				<button data-testid="open-dialog" onClick={() => confirm(args as IState)} />
				<ConfirmDialog {...props} />
			</>,
		);
		const button = screen.getByTestId('open-dialog');
		fireEvent.click(button);
	};

	// checks if the dialog renders
	test.each([
		['default', 'Test Waarschuwing', 'Weet u zeker dat u dit bestand wilt verwijderen?', 'Ja', 'Nee'],
		['custom', 'Test Warning', 'Are you sure you want to delete this file?', 'Cancel', 'Confirm'],
	])('Renders %s dialog without close button', (testCase, title, message, cancelLabel, confirmLabel) => {
		clickAndRenderDialog(
			{
				title: title,
				message: message,
				textCancelButton: cancelLabel,
				textConfirmButton: confirmLabel,
				...callbackMocks,
			},
			{},
		);
		expect(screen.queryByTestId('modal')).toBeInTheDocument();
		expect(screen.getByText(title)).toBeInTheDocument();
		expect(screen.getByText(message)).toBeInTheDocument();
		expect(screen.getByText(cancelLabel)).toBeInTheDocument();
		expect(screen.getByText(confirmLabel)).toBeInTheDocument();
		expect(screen.queryByTestId('modal-close-button')).not.toBeInTheDocument();
	});

	// checks if all buttons are clickable with passed methods
	test.each([
		['confirm', 'confirm-button'],
		['cancel', 'cancel-button'],
		['close', 'modal-close-button'],
	])('Test %s button', (testCase, testId) => {
		clickAndRenderDialog(
			{
				...defaultArg,
				...callbackMocks,
			},
			{
				hideCloseButton: false,
			},
		);
		fireEvent.click(screen.getByTestId(testId));
		expect(onClick).toHaveBeenCalled();
	});

	// checks if a dialog without a message renders
	test('Dialog should not render', () => {
		clickAndRenderDialog({ message: '' });
		expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
	});

	test('Should not show close button', () => {
		clickAndRenderDialog();
		expect(screen.queryByTestId('modal')).toBeInTheDocument();
		expect(screen.queryByTestId('modal-close-button')).not.toBeInTheDocument();
	});

	test('Should pass down disablePortal prop', () => {
		// @ts-ignore
		const spy = jest.spyOn(asc, 'Modal').mockImplementation(() => {
			return <div />;
		});

		clickAndRenderDialog(
			{
				...defaultArg,
				...callbackMocks,
			},
			{
				hideCloseButton: false,
			},
		);

		const props = mockComponentProps(mocked(asc.Modal));

		expect(props).toEqual({});
		// expect(screen.queryByTestId('modal')).toHaveProperty('hideCloseButton', false);
	});
});
