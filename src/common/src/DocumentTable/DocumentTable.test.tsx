import React from 'react';
import { GlobalStyle, ThemeProvider } from '@amsterdam/asc-ui';
import { render, getByText, screen, fireEvent, act, waitFor } from '@testing-library/react';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/core/styles';
import DocumentTable from './DocumentTable';
import muiTheme from '../../../theme/material-ui-theme';
import theme from '../../../theme/theme';
import { documents } from './__stubs__/documents';
import userEvent from '@testing-library/user-event';

// jest.mock('./ColumnFilter');
jest.mock('@amsterdam/asc-ui', () => {
	return {
		...jest.requireActual('@amsterdam/asc-ui'),
		Pagination: jest.fn().mockImplementation(function Pagination() {
			return <></>;
		}),
	};
});

function index(el: HTMLDivElement | null) {
	const children = el?.parentNode?.childNodes;
	if (!children) return -1;
	for (let i = 0; i < children.length; i++) {
		if (children[i] == el) {
			return i;
		}
	}
	return -1;
}

/**
 * NOTE: without the columnBuffer prop set not all columns will be available for assertions.
 * See: https://stackoverflow.com/questions/65669707/problem-testing-material-ui-datagrid-with-react-testing-library
 */
describe('<DocumentTable />', () => {
	describe('Renders a default set of columns and behaviours', () => {
		const mockOnDownload = jest.fn();
		const mockOnRemove = jest.fn().mockImplementation((rowId) => {
			return Promise.resolve(true);
		});
		let container: HTMLElement;
		beforeEach(() => {
			({ container } = render(
				<MUIThemeProvider theme={muiTheme}>
					<ThemeProvider overrides={theme}>
						<GlobalStyle />
						<DocumentTable onDownload={mockOnDownload} onRemove={mockOnRemove} rows={documents} />
					</ThemeProvider>
				</MUIThemeProvider>,
			));
		});

		test('Default columns', () => {
			const header1 = getByText(container, 'Bestandsnaam') as HTMLDivElement;
			expect(header1.className).toBe('MuiDataGrid-columnHeaderTitle');
			expect(index(header1.closest('div.MuiDataGrid-columnHeader'))).toBe(0);

			const header2 = getByText(container, 'Documentomschrijving') as HTMLDivElement;
			expect(header2.className).toBe('MuiDataGrid-columnHeaderTitle');
			expect(index(header2.closest('div.MuiDataGrid-columnHeader'))).toBe(1);

			const header3 = getByText(container, 'Documenttype') as HTMLDivElement;
			expect(header3.className).toBe('MuiDataGrid-columnHeaderTitle');
			expect(index(header3.closest('div.MuiDataGrid-columnHeader'))).toBe(2);

			const header4 = getByText(container, 'Jaar') as HTMLDivElement;
			expect(header4.className).toBe('MuiDataGrid-columnHeaderTitle');
			expect(index(header4.closest('div.MuiDataGrid-columnHeader'))).toBe(3);
		});

		// test.each([[1], [2], [3], [4], [5]])('Has a column for downloading document %s', (num) => {
		test.each(documents.slice(0, 10).map((doc) => [doc.filename, doc.id]))(
			'Has a column for downloading document "%s"',
			(name, id) => {
				const link = screen.getByTestId(`document-table-download-${id}`);
				// expect(link).toHaveTextContent(documents.find((doc) => doc.id === id)?.filename ?? '');
				expect(link.textContent).toContain(documents.find((doc) => doc.id === id)?.filename ?? '');
				fireEvent.click(link);
				expect(mockOnDownload).toHaveBeenCalledWith(documents.find((doc) => doc.id === id));
			},
		);

		test.each(documents.slice(0, 10).map((doc) => [doc.filename, doc.id]))(
			'Has a column for removing document "%s"',
			async (name, id) => {
				// test.each([[1], [2], [3], [4], [5]])('Has a column for removing row %s', (num) => {
				const button = screen.getByTestId(`document-table-remove-${id}`);
				expect(button.textContent).toContain('Wissen');
				act(() => {
					fireEvent.click(button);
				});
				await waitFor(() => {
					expect(mockOnRemove).toHaveBeenCalledWith(id);
				});
			},
		);

		// TODO Couldn't get <ColumnFilter /> events to update internal state in set time-box
		test('Allows filtering using <ColumnFilter />', async () => {
			const input = screen.getByTestId('column-filter-documentDescription');
			act(() => {
				// fireEvent.change(input, { target: { value: '1' } });
				// userEvent.keyboard('1');
				userEvent.type(input, '1');
				screen.debug(input);
				// fireEvent.focus(input);
				// fireEvent.blur(input); // 'Digit1'
				// fireEvent.keyUp(input, { key: '1', code: 49 }); // 'Digit1'
			});
			await waitFor(() => {
				const row1 = screen.getByText(documents[0].documentDescription).closest('.MuiDataGrid-row');
				expect(row1).toHaveAttribute('data-rowindex', '1');
				const row2 = screen.getByText(documents[9].documentDescription).closest('.MuiDataGrid-row');
				expect(row2).toHaveAttribute('data-rowindex', '2');
			});
			// const row2 = screen.getByText('Foto onderkant').closest('.MuiDataGrid-row');
			// expect(row2).toHaveAttribute('data-rowindex', '2');
		});
	});
});
