import React from 'react';
import { act, fireEvent, getByTestId, queryByTestId, render, waitFor, screen } from '@testing-library/react';
import 'jest-styled-components';
import ColumnFilter from './ColumnFilter';

describe('<ColumnFilter />', () => {
	test('Can be mounted without a default value', () => {
		const { container } = render(
			<ColumnFilter
				name="filename"
				onFilter={() => jest.fn()}
				onClear={() => jest.fn()}
				params={{
					field: 'filename',
				}}
			/>,
		);
		const input = getByTestId(container, 'column-filter-filename') as HTMLInputElement;
		expect(input).toBeInTheDocument();
		expect(input.value).toBe('');
		expect(queryByTestId(container, 'column-filter-cancel-filename')).not.toBeInTheDocument();
	});

	test('Can be mounted with a default value', () => {
		const { container } = render(
			<ColumnFilter
				name="filename"
				value="seed-words.pdf"
				onFilter={() => jest.fn()}
				onClear={() => jest.fn()}
				params={{
					field: 'filename',
				}}
			/>,
		);
		const input = getByTestId(container, 'column-filter-filename') as HTMLInputElement;
		expect(input.value).toBe('seed-words.pdf');
		expect(queryByTestId(container, 'column-filter-cancel-filename')).toBeInTheDocument();
	});

	test('onKeyUp triggers callback', async () => {
		const mockOnChange = jest.fn();
		render(
			<ColumnFilter
				name="filename"
				onFilter={mockOnChange}
				onClear={() => jest.fn()}
				params={{
					field: 'filename',
				}}
			/>,
		);
		act(() => {
			fireEvent.change(screen.getByTestId('column-filter-filename'), { target: { value: 'o' } });
		});
		await waitFor(() => {
			expect(mockOnChange).toHaveBeenCalledWith('o');
		});
	});

	test('Clicking on cancel icon clears value', () => {
		const mockOnClear = jest.fn();
		const { container } = render(
			<ColumnFilter
				name="filename"
				onFilter={() => jest.fn()}
				onClear={mockOnClear}
				params={{
					field: 'filename',
				}}
			/>,
		);
		const input = getByTestId(container, 'column-filter-filename') as HTMLInputElement;
		fireEvent.change(input, { target: { value: 'Test' } });
		expect(input.value).toBe('Test');
		const icon = getByTestId(container, 'column-filter-cancel-filename');
		fireEvent.click(icon);
		expect(mockOnClear).toHaveBeenCalled();
		expect(input.value).toBe('');
	});
});
