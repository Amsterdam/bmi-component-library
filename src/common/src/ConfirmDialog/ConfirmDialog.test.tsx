import React from 'react';
import { fireEvent, render } from '../../../test-utils/customRender';
import { screen } from '@testing-library/dom';
import ConfirmDialog, { confirm } from './ConfirmDialog';

describe('<ConfirmDialog />', () => {
	const onClick = jest.fn();

	const defaultProps = {
		title: 'Test Title',
		message: 'Test Message',
	};

	const mockedButtonProps = {
		onCancel: onClick,
		onConfirm: onClick,
	};

	const defaultRenders = [
		['default', 'Test Waarschuwing', 'Weet u zeker dat u dit bestand wilt verwijderen?', 'Ja', 'Nee'],
		['custom', 'Test Warning', 'Are you sure you want to delete this file?', 'Cancel', 'Confirm'],
	];

	const buttons = [
		['confirm', 'confirm-button'],
		['cancel', 'cancel-button'],
		['close', 'modal-close-button'],
	];

	const clickAndRenderDialog = (props: any, element: any) => {
		render(
			<>
				<button data-testid="open-dialog" onClick={() => confirm(props)} />
				{element}
			</>,
		);

		const button = screen.getByTestId('open-dialog');
		fireEvent.click(button);
	};

	// checks if the dialog renders
	test.each(defaultRenders)(
		'Renders %s dialog without close button',
		(testCase, title, message, cancelLabel, confirmLabel) => {
			const props: any = {
				title: title,
				message: message,
				textCancelButton: cancelLabel,
				textConfirmButton: confirmLabel,
				...mockedButtonProps,
			};

			clickAndRenderDialog(props, <ConfirmDialog />);

			expect(screen.getByText(title)).toBeInTheDocument();
			expect(screen.getByText(message)).toBeInTheDocument();
			expect(screen.getByText(cancelLabel)).toBeInTheDocument();
			expect(screen.getByText(confirmLabel)).toBeInTheDocument();
			expect(screen.queryByTestId('modal-close-button')).not.toBeInTheDocument();
		},
	);

	// checks if all buttons are clickable with passed methods
	test.each(buttons)('Test %s button', (testCase, testId) => {
		const props: any = {
			...defaultProps,
			...mockedButtonProps,
		};

		clickAndRenderDialog(props, <ConfirmDialog hideCloseButton={false} />);

		fireEvent.click(screen.getByTestId(testId));
		expect(onClick).toHaveBeenCalled();
	});

	// checks if a dialog without a message renders
	test('Dialog should not render', () => {
		const props: any = {
			...mockedButtonProps,
		};

		clickAndRenderDialog(props, <ConfirmDialog />);

		expect(screen.queryByTestId('confirm-dialog')).toBeNull();
	});

	test('Should not show close button', () => {
		const props = {
			title: 'TestDialog',
			message: 'Are you sure you want to delete this file?',
			textCancelButton: 'Cancel',
			textConfirmButton: 'Confirm',
			onCancel: jest.fn(),
			onConfirm: jest.fn(),
		};

		clickAndRenderDialog(props, <ConfirmDialog />);

		expect(screen.queryByTestId('modal-close-button')).not.toBeInTheDocument();
	});
});
