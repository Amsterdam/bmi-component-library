import React, { createRef } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Input, InputType } from './Input';

jest.useFakeTimers();

describe('Input', () => {
	const onBlurMockFn = jest.fn();
	const onChangeMockFn = jest.fn();
	const onFocusMockFn = jest.fn();
	const props = {
		id: 'id',
		label: 'label',
		name: 'name',
		type: 'text' as InputType,
		onBlur: onBlurMockFn,
		onChange: onChangeMockFn,
		onFocus: onFocusMockFn,
		value: 'test-value',
	};

	afterEach(() => {
		jest.resetAllMocks();
	});

	describe('component behaviour', () => {
		let input: any;

		beforeEach(() => {
			const { container } = render(<Input {...props} />);
			input = container.querySelector('input');
		});

		it('should trigger the onOnChange event', () => {
			fireEvent.change(input, { target: { value: 'a' } });
			expect(onChangeMockFn).toHaveBeenCalledTimes(1);
		});
	});

	it('should handle refs', () => {
		const ref = createRef<HTMLInputElement>();

		render(<Input ref={ref} id="id" label="label" name="name" type="text" />);

		expect(ref.current).toBeInstanceOf(HTMLInputElement);
		expect(ref.current?.type).toEqual('text');
	});
});
