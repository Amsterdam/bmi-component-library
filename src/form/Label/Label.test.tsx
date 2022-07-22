import React from 'react';
import { render, screen } from '@testing-library/react';
import { Label } from './Label';
import { INPUT_SIZE } from '../../shared/constants';

describe('<Label />', () => {
	const labelText = 'foo';

	it('should render', () => {
		render(<Label label={labelText}></Label>);
		expect(screen.getByText(labelText)).toBeInTheDocument();
	});

	it('should have the expected default styling', () => {
		const { container } = render(<Label label={labelText}></Label>);

		const labelTextWrapper = screen.getByText(labelText);
		let style = window.getComputedStyle(labelTextWrapper);

		expect(style.order).toBe('0');
		expect(style.fontWeight).toBe('700');
		expect(style.fontSize).toBe('18px');
		// unable to test margin, not a real DOM no real results
		// expect(style.marginRight).not.toBe('0px');
		// expect(style.marginBottom).toBe('0px');
		// expect(style.marginLeft).toBe('0px');
		// expect(style.marginTop).toBe('0px');
		expect(style.lineHeight).toBe(`${INPUT_SIZE}px`);

		const label = container.querySelector('label');
		style = window.getComputedStyle(label as Element);

		expect(style.opacity).toBe('');
		expect(style.cursor).toBe('pointer');
		expect(style.flexDirection).not.toBe('column');
	});

	it('should have the expected disabled styling', () => {
		const { container } = render(<Label disabled label={labelText}></Label>);

		const label = container.querySelector('label');
		const style = window.getComputedStyle(label as Element);

		expect(style.opacity).toBe('0.3');
		expect(style.cursor).not.toBe('pointer');
	});

	it('should have the expected styling when position is set to top', () => {
		const { container } = render(<Label label={labelText} position="top"></Label>);

		const labelTextWrapper = screen.getByText(labelText);
		let style = window.getComputedStyle(labelTextWrapper);
		expect(style.order).toBe('0');
		// unable to test margin, not a real DOM no real results
		// expect(style.marginBottom).not.toBe('0px');
		expect(style.lineHeight).not.toBe(`${INPUT_SIZE}px`);

		const label = container.querySelector('label');
		style = window.getComputedStyle(label as Element);

		expect(style.flexDirection).toBe('column');
	});

	it('should have the expected styling when position is set to right', () => {
		const { container } = render(<Label label={labelText} position="right"></Label>);

		const labelTextWrapper = screen.getByText(labelText);
		let style = window.getComputedStyle(labelTextWrapper);
		expect(style.order).toBe('1');
		// unable to test margin, not a real DOM no real results
		// expect(style.marginLeft).not.toBe('0px');
		expect(style.lineHeight).toBe(`${INPUT_SIZE}px`);

		const label = container.querySelector('label');
		style = window.getComputedStyle(label as Element);

		expect(style.flexDirection).not.toBe('column');
	});

	it('should have the expected styling when position is set to bottom', () => {
		const { container } = render(<Label label={labelText} position="bottom"></Label>);

		const labelTextWrapper = screen.getByText(labelText);
		let style = window.getComputedStyle(labelTextWrapper);
		expect(style.order).toBe('1');
		// unable to test margin, not a real DOM no real results
		// expect(style.marginTop).not.toBe('0px');
		expect(style.lineHeight).not.toBe(`${INPUT_SIZE}px`);

		const label = container.querySelector('label');
		style = window.getComputedStyle(label as Element);

		expect(style.flexDirection).toBe('column');
	});
});
