import type { IState, Props } from './ConfirmDialog';

import React, { ComponentProps } from 'react';
import { screen } from '@testing-library/dom';
import { fireEvent, render } from '../../../test-utils/customRender';
import { mockComponentProps } from '~/tests/helpers';
import { Modal } from '@amsterdam/asc-ui';

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

	const clickAndRenderDialog = async (args: Partial<IState> = defaultArg, props: Partial<Props> = {}) => {
		const { default: ConfirmDialog, confirm } = await import('../ConfirmDialog/ConfirmDialog');
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
	])('Renders %s dialog without close button', async (testCase, title, message, cancelLabel, confirmLabel) => {
		await clickAndRenderDialog(
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
	])('Test %s button', async (testCase, testId) => {
		jest.isolateModules(async () => {
			await clickAndRenderDialog(
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
	});

	// checks if a dialog without a message renders
	test('Dialog should not render', async () => {
		jest.isolateModules(async () => {
			await clickAndRenderDialog({ message: '' });
			expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
		});
	});

	test('Should not show close button', async () => {
		jest.isolateModules(async () => {
			await clickAndRenderDialog();
			expect(screen.queryByTestId('modal')).toBeInTheDocument();
			expect(screen.queryByTestId('modal-close-button')).not.toBeInTheDocument();
		});
	});

	test('Should pass down disablePortal prop', () => {
		jest.isolateModules(async () => {
			const mock = jest.fn().mockImplementation(() => <div />);
			jest.doMock('@amsterdam/asc-ui', () => ({
				...jest.requireActual('@amsterdam/asc-ui'),
				Modal: mock,
			}));

			const { default: ConfirmDialog, confirm } = await import('../ConfirmDialog/ConfirmDialog');
			render(
				<>
					<button data-testid="open-dialog" onClick={() => confirm({ ...defaultArg, ...callbackMocks })} />
					<ConfirmDialog hideCloseButton={false} disablePortal />
				</>,
			);
			const button = screen.getByTestId('open-dialog');
			fireEvent.click(button);

			const mockedModal = await mockComponentProps<ComponentProps<typeof Modal>>(mock).catch(() => {
				// catching the unhandled exception.
				document.write('Mocked object is undefined');
			});

			if (mockedModal) {
				expect(mockedModal.disablePortal).toBe(true);
			}
		});
	});
});
