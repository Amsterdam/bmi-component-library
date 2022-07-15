import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import ModalActions from './ModalActions';

describe('<ModalActions />', () => {
	it('should render', () => {
		const { container } = render(<ModalActions>Foo</ModalActions>);
		expect(container.firstElementChild).toBeDefined();
		expect(getByTestId(container, 'modal-actions')).toBeInTheDocument();
		expect(container.querySelector('hr')).toBeInTheDocument();
	});

	it('Divider should not be transparent, when hideDivider is false', () => {
		const { container } = render(<ModalActions hideDivider={false}>Foo</ModalActions>);
		const divider = container.querySelector('hr');
		const style = window.getComputedStyle(divider as Element);
		expect(style.backgroundColor).not.toBe('transparent');
	});

	it('Divider should be transparent, when hideDivider is true', () => {
		const { container } = render(<ModalActions hideDivider>Foo</ModalActions>);
		const divider = container.querySelector('hr');
		const style = window.getComputedStyle(divider as Element);
		expect(style.backgroundColor).toBe('transparent');
	});

	it('Divider should not be transparent as default', () => {
		const { container } = render(<ModalActions>Foo</ModalActions>);
		const divider = container.querySelector('hr');
		const style = window.getComputedStyle(divider as Element);
		expect(style.backgroundColor).not.toBe('transparent');
	});
	/**
	 *  Can't use getBoundClientRect because jsdom only returns the correct keys, not the actual values.
	 *  See: https://github.com/jsdom/jsdom/issues/653
	 */
	it.skip('should render with expected styles', () => {
		// const { container } = render(<ModalActions>Foo</ModalActions>);
		// const header = getByTestId(container, 'modal-actions');
		// const boundingRect = header.getBoundingClientRect();
		// expect(boundingRect.height).toBeGreaterThanOrEqual('24');
	});
});
