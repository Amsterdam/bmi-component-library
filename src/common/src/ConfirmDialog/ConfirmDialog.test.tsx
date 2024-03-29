import type { IState, Props } from './ConfirmDialog';

import { ComponentProps } from 'react';
import { screen } from '@testing-library/dom';
import { Modal, ThemeProvider } from '@amsterdam/asc-ui';
import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { mockComponentProps } from '~/tests/helpers';

import theme from '../../../theme/theme';

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

	const clickAndRenderDialog = async (
		args: Partial<IState> = defaultArg,
		props: Partial<Props> = {},
		customSubject: Props['store'] = undefined,
	) => {
		const { default: ConfirmDialog, confirm } = await import('../ConfirmDialog/ConfirmDialog');
		act(() => {
			render(
				<ThemeProvider overrides={theme}>
					<button data-testid="open-dialog" onClick={() => confirm(args as IState, customSubject)} />
					<ConfirmDialog {...props} store={customSubject} />
				</ThemeProvider>,
			);
		});
		const button = screen.getByTestId('open-dialog');
		fireEvent.click(button);
	};

	test('Should pass down disablePortal prop', () => {
		jest.isolateModules(async () => {
			const mock = jest.fn().mockImplementation(() => <div />);
			jest.doMock('@amsterdam/asc-ui', () => ({
				...jest.requireActual('@amsterdam/asc-ui'),
				Modal: mock,
			}));

			await clickAndRenderDialog(
				{
					...defaultArg,
					...callbackMocks,
				},
				{
					disablePortal: true,
				},
			);

			const { disablePortal } = await mockComponentProps<ComponentProps<typeof Modal>>(mock);

			expect(disablePortal).toBe(true);
		});
	});

	// checks if the dialog renders
	test.each([
		['default', 'Test Waarschuwing', 'Weet u zeker dat u dit bestand wilt verwijderen?', 'Ja', 'Nee'],
		['custom', 'Test Warning', 'Are you sure you want to delete this file?', 'Cancel', 'Confirm'],
	])('Renders %s dialog without close button', async (testCase, title, message, cancelLabel, confirmLabel) => {
		jest.isolateModules(async () => {
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

			await waitFor(() => {
				expect(screen.queryByTestId('modal')).toBeInTheDocument();
				expect(screen.getByText(title)).toBeInTheDocument();
				expect(screen.getByText(message)).toBeInTheDocument();
				expect(screen.getByText(cancelLabel)).toBeInTheDocument();
				expect(screen.getByText(confirmLabel)).toBeInTheDocument();
				expect(screen.queryByTestId('modal-close-button')).not.toBeInTheDocument();
			});
		});
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
			await waitFor(() => {
				fireEvent.click(screen.getByTestId(testId));
				expect(onClick).toHaveBeenCalled();
			});
		});
	});

	// checks if a dialog without a message renders
	test('Dialog should not render', async () => {
		jest.isolateModules(async () => {
			await clickAndRenderDialog({ message: '' });
			await waitFor(() => {
				expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
			});
		});
	});

	test('Should not show close button', async () => {
		jest.isolateModules(async () => {
			await clickAndRenderDialog();
			await waitFor(() => {
				expect(screen.queryByTestId('modal')).toBeInTheDocument();
				expect(screen.queryByTestId('modal-close-button')).not.toBeInTheDocument();
			});
		});
	});

	test.todo('Custom BehaviorSubject for isolated state');
	/* This test works but produces untraceable output :/
	   Storybook has a working example though
	test('Custom BehaviorSubject for isolated state', async () => {
		const customSubject = new BehaviorSubject<IState>(initialState);
		jest.isolateModules(async () => {
			await clickAndRenderDialog(undefined, undefined, customSubject);
			await waitFor(() => {
				expect(screen.queryByTestId('modal')).toBeInTheDocument();
				expect(screen.queryByTestId('modal-close-button')).not.toBeInTheDocument();
			});
		});
	});
	*/

	test('Renders a ReactNode for a confirmation message', () => {
		jest.isolateModules(async () => {
			await clickAndRenderDialog(
				{
					title: 'Element verwijderen',
					message: <p data-testid="react-node-message">Weet u zeker dat u dit element wilt verwijderen?</p>,
					textCancelButton: 'Annuleer',
					textConfirmButton: 'Verwijder',
					...callbackMocks,
				},
				{},
			);

			await waitFor(() => {
				expect(screen.queryByTestId('modal')).toBeInTheDocument();
				expect(screen.getByText('Weet u zeker dat u dit element wilt verwijderen?')).toBeInTheDocument();
			});
		});
	});
});
