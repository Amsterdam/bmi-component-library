import React from 'react';
import { GlobalStyle, ThemeProvider } from '@amsterdam/asc-ui';
import { render, getByText, screen, fireEvent, act, waitFor } from '@testing-library/react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import DocumentTable, { applyFilters, paginate, Props } from './DocumentTable';
import muiTheme from '../../../theme/material-ui-theme';
import theme from '../../../theme/theme';
import { documents } from './__stubs__/documents';

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

const getRow = (el: HTMLElement) => el.closest('.MuiDataGrid-row');

/**
 * NOTE: without the columnBuffer prop set not all columns will be available for assertions.
 * See: https://stackoverflow.com/questions/65669707/problem-testing-material-ui-datagrid-with-react-testing-library
 */
describe('<DocumentTable />', () => {
	const mockOnDownload = jest.fn();
	const mockOnRemove = jest.fn().mockImplementation((rowId) => {
		return Promise.resolve(true);
	});
	let container: HTMLElement;

	const renderDocumentTable = (props: Partial<Props> = {}) =>
		render(
			<MUIThemeProvider theme={muiTheme}>
				<ThemeProvider overrides={theme}>
					<GlobalStyle />
					<DocumentTable onDownload={mockOnDownload} onRemove={mockOnRemove} rows={documents} {...props} />
				</ThemeProvider>
			</MUIThemeProvider>,
		);

	beforeEach(() => {
		({ container } = renderDocumentTable());
	});

	describe('Renders a default set of columns and behaviours', () => {
		test('Default columns', () => {
			const header1 = getByText(container, 'Bestandsnaam') as HTMLDivElement;
			expect(header1.className).toContain('MuiDataGrid-columnHeaderTitle');
			expect(index(header1.closest('div.MuiDataGrid-columnHeader'))).toBe(0);

			const header2 = getByText(container, 'Documentomschrijving') as HTMLDivElement;
			expect(header2.className).toContain('MuiDataGrid-columnHeaderTitle');
			expect(index(header2.closest('div.MuiDataGrid-columnHeader'))).toBe(1);

			const header3 = getByText(container, 'Documenttype') as HTMLDivElement;
			expect(header3.className).toContain('MuiDataGrid-columnHeaderTitle');
			expect(index(header3.closest('div.MuiDataGrid-columnHeader'))).toBe(2);

			const header4 = getByText(container, 'Jaar') as HTMLDivElement;
			expect(header4.className).toContain('MuiDataGrid-columnHeaderTitle');
			expect(index(header4.closest('div.MuiDataGrid-columnHeader'))).toBe(3);
		});

		test.each(documents.slice(0, 10).map((doc) => [doc.filename, doc.id]))(
			'Has a column for downloading document "%s"',
			(name, id) => {
				const link = screen.getByTestId(`document-table-download-${id}`);
				expect(link.textContent).toContain(documents.find((doc) => doc.id === id)?.filename ?? '');
				fireEvent.click(link);
				expect(mockOnDownload).toHaveBeenCalledWith(documents.find((doc) => doc.id === id));
			},
		);

		// test.each(documents.slice(0, 10).map((doc) => [doc.filename, doc.id]))(
		// 	'Has a column for removing document "%s"',
		// 	async (name, id) => {
		// 		const button = screen.getByTestId(`document-table-remove-${id}`);
		// 		expect(button.textContent).toContain('Wissen');
		// 		act(() => {
		// 			fireEvent.click(button);
		// 		});
		// 		await waitFor(() => {
		// 			expect(mockOnRemove).toHaveBeenCalledWith(id);
		// 		});
		// 	},
		// );
	});

	//describe('Allows filtering using <ColumnFilter />', () => {
	// test('Single column filter', async () => {
	// 	act(() => {
	// 		fireEvent.change(screen.getByTestId('column-filter-documentDescription'), {
	// 			target: { value: '11' },
	// 		});
	// 	});
	// 	await waitFor(() => {
	// 		expect(getRow(screen.getByText(documents[10].documentDescription))).toHaveAttribute(
	// 			'data-rowindex',
	// 			'1',
	// 		);
	// 	});
	// });

	// test('Multiple columns filter', async () => {
	// 	act(() => {
	// 		fireEvent.change(screen.getByTestId('column-filter-filename'), {
	// 			target: { value: '1' },
	// 		});
	// 		fireEvent.change(screen.getByTestId('column-filter-documentDescription'), {
	// 			target: { value: '2' },
	// 		});
	// 	});
	// 	await waitFor(() => {
	// 		expect(getRow(screen.getByText(documents[11].documentDescription))).toHaveAttribute(
	// 			'data-rowindex',
	// 			'1',
	// 		);
	// 	});
	// });
	//});

	// test('Clicking the x icon on <ColumnFilter /> clears the filter', async () => {
	// 	act(() => {
	// 		fireEvent.change(screen.getByTestId('column-filter-documentDescription'), { target: { value: '2' } });
	// 	});
	// 	const clearButton = screen.getByTestId('column-filter-cancel-documentDescription');
	// 	await waitFor(() => {
	// 		expect(clearButton).toBeInTheDocument();
	// 		expect(getRow(screen.getByText(documents[1].documentDescription))).toHaveAttribute('data-rowindex', '1');
	// 	});
	// 	act(() => {
	// 		fireEvent.click(clearButton);
	// 	});
	// 	await waitFor(() => {
	// 		expect(getRow(screen.getByText(documents[0].documentDescription))).toHaveAttribute('data-rowindex', '1');
	// 	});
	// });

	// test('Allows paginating the result set', async () => {
	// 	act(() => {
	// 		fireEvent.click(screen.getByTestId('pageButton-2'));
	// 	});

	// 	await waitFor(() => {
	// 		expect(getRow(screen.getByText(documents[10].documentDescription))).toHaveAttribute('data-rowindex', '1');
	// 	});
	// });

	describe('paginate() ', () => {
		test('pageSize 2', () => {
			expect(paginate(documents, 2, 1).map((doc) => doc.filename)).toEqual([
				'__FILENAME__  #1',
				'__FILENAME__  #2',
			]);
			expect(paginate(documents, 2, 2).map((doc) => doc.filename)).toEqual([
				'__FILENAME__  #3',
				'__FILENAME__  #4',
			]);
		});

		test('pageSize 10', () => {
			expect(paginate(documents, 10, 1).map((doc) => doc.filename)).toEqual([
				'__FILENAME__  #1',
				'__FILENAME__  #2',
				'__FILENAME__  #3',
				'__FILENAME__  #4',
				'__FILENAME__  #5',
				'__FILENAME__  #6',
				'__FILENAME__  #7',
				'__FILENAME__  #8',
				'__FILENAME__  #9',
				'__FILENAME__  #10',
			]);
			expect(paginate(documents, 10, 2).map((doc) => doc.filename)).toEqual([
				'__FILENAME__  #11',
				'__FILENAME__  #12',
				'__FILENAME__  #13',
				'__FILENAME__  #14',
			]);
		});
	});

	describe('applyFilters()', () => {
		test('Single filter', () => {
			expect(applyFilters(documents, { documentDescription: '1' }).map((doc) => doc.filename)).toEqual([
				'__FILENAME__  #1',
				'__FILENAME__  #10',
				'__FILENAME__  #11',
				'__FILENAME__  #12',
				'__FILENAME__  #13',
				'__FILENAME__  #14',
			]);
		});

		test('Multiple filters', () => {
			expect(
				applyFilters(documents, { filename: '2', documentDescription: '1' }).map((doc) => doc.filename),
			).toEqual(['__FILENAME__  #12']);
		});
	});

	describe('Has a loading state where each cell renders as a <Skeleton /> component', () => {
		test('With filter', () => {
			({ container } = renderDocumentTable({ loading: true }));
			expect(container.getElementsByClassName('react-loading-skeleton').length).toBe(55);
		});

		test('Without filter', () => {
			({ container } = renderDocumentTable({
				loading: true,
				disableFilterRow: true,
				rows: [],
			}));
			expect(container.getElementsByClassName('react-loading-skeleton').length).toBe(50);
		});
	});
});
