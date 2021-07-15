import React from 'react';
import { GlobalStyle, ThemeProvider } from '@amsterdam/asc-ui';
import { render, getByText, screen, fireEvent, act } from '@testing-library/react';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/core/styles';
import DocumentTable from './DocumentTable';
import muiTheme from '../../../theme/material-ui-theme';
import theme from '../../../theme/theme';

jest.mock('./ColumnFilter');
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

const rows = [
	{
		id: 1,
		filename: 'Bouwfoto1',
		documentDescription: 'Bouwkundig onderzoek',
		documentType: 'SOK',
		year: 2021,
	},
	{
		id: 2,
		filename: 'Overzichtskaart',
		documentDescription: 'Geotechnisch onderzoek',
		documentType: 'SOK',
		year: 2021,
	},
	{
		id: 3,
		filename: 'Metingen',
		documentDescription: 'Conditiemetingen bestaande objecten',
		documentType: 'SOK',
		year: 2021,
	},
	{
		id: 4,
		filename: 'Overzichtskaart 2',
		documentDescription: 'Geotechnisch onderzoek',
		documentType: 'SOK',
		year: 2021,
	},
	{
		id: 5,
		filename: 'Foto onderkant',
		documentDescription: 'Bouwkundig onderzoek',
		documentType: 'SOK',
		year: 2021,
	},
];

/**
 * NOTE: without the columnBuffer prop set not all columns will be available for assertions.
 * See: https://stackoverflow.com/questions/65669707/problem-testing-material-ui-datagrid-with-react-testing-library
 */
describe('<DocumentTable />', () => {
	describe('Renders a default set of columns and behaviours', () => {
		const mockOnDownload = jest.fn();
		const mockOnRemove = jest.fn();
		let container: HTMLElement;
		beforeEach(() => {
			({ container } = render(
				<MUIThemeProvider theme={muiTheme}>
					<ThemeProvider overrides={theme}>
						<GlobalStyle />
						<DocumentTable onDownload={mockOnDownload} onRemove={mockOnRemove} rows={rows} />
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

		test.each([[1], [2], [3], [4], [5]])('Has a column for downloading document %s', (num) => {
			const link = screen.getByTestId(`document-table-download-${num}`);
			expect(link).toHaveTextContent(rows.find((row) => row.id === num)?.filename ?? '');
			fireEvent.click(link);
			expect(mockOnDownload).toHaveBeenCalledWith(rows.find((row) => row.id === num));
		});

		test.each([[1], [2], [3], [4], [5]])('Has a column for removing row %s', (num) => {
			const button = screen.getByTestId(`document-table-remove-${num}`);
			expect(button).toHaveTextContent('Wissen');
			fireEvent.click(button);
			expect(mockOnRemove).toHaveBeenCalledWith(num);
		});

		// TODO Couldn't get <ColumnFilter /> events to update internal state in set time-box
		xtest('Allows filtering using <ColumnFilter />', () => {
			const input = screen.getByTestId('column-filter-filename');
			act(() => {
				fireEvent.keyUp(input, { key: 'o', code: 'KeyE' });
				fireEvent.change(input, { target: { value: 'foto' } });
			});
			const row1 = screen.getByText('Bouwfoto1').closest('.MuiDataGrid-row');
			expect(row1).toHaveAttribute('data-rowindex', '1');
			const row2 = screen.getByText('Foto onderkant').closest('.MuiDataGrid-row');
			expect(row2).toHaveAttribute('data-rowindex', '2');
		});
	});
});
