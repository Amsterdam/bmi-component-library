import React from 'react';
import { fireEvent, getByTestId, queryByTestId, render } from '@testing-library/react';
import 'jest-styled-components';
import ColumnFilter from './ColumnFilter';

describe('<ColumnFilter />', () => {
	test('Can be mounted without a default value', () => {
		const { container } = render(
			<ColumnFilter
				name="filename"
				onKeyUp={() => jest.fn()}
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
				onKeyUp={() => jest.fn()}
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

	test('onKeyUp triggers callback', () => {
		const mockOnKeyUp = jest.fn();
		const { container } = render(
			<ColumnFilter
				name="filename"
				onKeyUp={mockOnKeyUp}
				onClear={() => jest.fn()}
				params={{
					field: 'filename',
				}}
			/>,
		);
		const input = getByTestId(container, 'column-filter-filename') as HTMLInputElement;
		fireEvent.keyUp(input, { key: 'o', code: 'KeyE' });
		expect(mockOnKeyUp.mock.calls[0][0].key).toBe('o');
	});

	test('Clicking on cancel icon clears value', () => {
		const mockOnClear = jest.fn();
		const { container } = render(
			<ColumnFilter
				name="filename"
				onKeyUp={() => jest.fn()}
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
