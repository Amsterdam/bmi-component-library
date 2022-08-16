import React from 'react';
import { render } from '@testing-library/react';
import ModalContent from './ModalContent';

describe('<ModalContent />', () => {
	it('should remove the margin from the first and last element', () => {
		const { container } = render(
			<ModalContent>
				<h1>First</h1>
				<h2>Second</h2>
				<h3>Third</h3>
			</ModalContent>,
		);
		const header1 = container.querySelector('h1');
		const header2 = container.querySelector('h2');
		const header3 = container.querySelector('h3');

		let style = window.getComputedStyle(header1 as Element);
		expect(style.marginTop).toBe('0px');
		expect(style.marginBottom).not.toBe('0px');

		style = window.getComputedStyle(header2 as Element);
		expect(style.marginTop).not.toBe('0px');
		expect(style.marginBottom).not.toBe('0px');

		style = window.getComputedStyle(header3 as Element);
		expect(style.marginTop).not.toBe('0px');
		expect(style.marginBottom).toBe('0px');
	});
});
