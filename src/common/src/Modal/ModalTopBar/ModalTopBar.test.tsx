import React from 'react';
import { render, fireEvent, queryByTestId, getByTestId } from '@testing-library/react';
import ModalTopBar from './ModalTopBar';

describe('<ModalTopBar />', () => {
	it('should render', () => {
		const { container } = render(<ModalTopBar>Foo</ModalTopBar>);
		expect(container.firstElementChild).toBeDefined();
		expect(getByTestId(container, 'modal-top-bar')).toBeDefined();
		expect(getByTestId(container, 'modal-top-bar-children')).toBeDefined();
		expect(getByTestId(container, 'modal-top-bar-divider')).toBeDefined();
	});

	it('should render with close button, when hideCloseButton is false', () => {
		const { container } = render(<ModalTopBar hideCloseButton={false}>Foo</ModalTopBar>);
		expect(getByTestId(container, 'modal-close-button')).toBeDefined();
	});

	it('should render without close button, when hideCloseButton is true', () => {
		const { container } = render(<ModalTopBar hideCloseButton={true}>Foo</ModalTopBar>);
		expect(queryByTestId(container, 'modal-close-button')).not.toBeInTheDocument();
	});

	it('should render with close button as default', () => {
		const { container } = render(<ModalTopBar>Foo</ModalTopBar>);
		expect(getByTestId(container, 'modal-close-button')).toBeDefined();
	});

	it('Divider should not be transparent, when hideDivider is false', () => {
		const { container } = render(<ModalTopBar hideDivider={false}>Foo</ModalTopBar>);
		const divider = getByTestId(container, 'modal-top-bar-divider');
		const style = window.getComputedStyle(divider);
		expect(style.backgroundColor).not.toBe('transparent');
	});

	it('Divider should be transparent, when hideDivider is true', () => {
		const { container } = render(<ModalTopBar hideDivider={true}>Foo</ModalTopBar>);
		const divider = getByTestId(container, 'modal-top-bar-divider');
		const style = window.getComputedStyle(divider);
		expect(style.backgroundColor).toBe('transparent');
	});

	it('Divider should not be transparent as default', () => {
		const { container } = render(<ModalTopBar>Foo</ModalTopBar>);
		const divider = getByTestId(container, 'modal-top-bar-divider');
		const style = window.getComputedStyle(divider);
		expect(style.backgroundColor).not.toBe('transparent');
	});
	/**
	 *  Can't use getBoundClientRect because jsdom only returns the correct keys, not the actual values.
	 *  See: https://github.com/jsdom/jsdom/issues/653
	 */
	it('should render with expected styles', () => {
		const { container } = render(<ModalTopBar>Foo</ModalTopBar>);
		// const header = getByTestId(container, 'modal-top-bar');
		// const boundingRect = header.getBoundingClientRect();
		// expect(boundingRect.height).toBe('68');

		const childrenWrapper = getByTestId(container, 'modal-top-bar-children');
		const style = window.getComputedStyle(childrenWrapper);
		expect(style.fontWeight).toBe('800');
		expect(style.fontSize).toBe('40px');
	});

	/**
	 *  Can't use getBoundClientRect because jsdom only returns the correct keys, not the actual values.
	 *  See: https://github.com/jsdom/jsdom/issues/653
	 */
	it.skip('should truncate long content, test by verify height', () => {
		const { container } = render(
			<ModalTopBar>
				Commodo laboris cillum occaecat eiusmod aliqua incididunt esse do culpa est deserunt. Culpa mollit ad
				magna sunt tempor laborum veniam fugiat aute qui aliqua. Qui mollit velit et nisi. Aute consequat anim
				commodo do nostrud dolore anim exercitation Lorem sunt aliqua fugiat. In eiusmod aliquip aliquip officia
				incididunt eiusmod excepteur eiusmod deserunt reprehenderit est. Amet non aute esse quis labore ex
				laborum officia laboris veniam ea nulla incididunt. Sunt consequat occaecat commodo officia. Do duis sit
				consequat commodo ad anim. Occaecat culpa in minim laboris.
			</ModalTopBar>,
		);
		const header = getByTestId(container, 'modal-top-bar');
		const boundingRect = header.getBoundingClientRect();
		expect(boundingRect.height).toBe('68');
	});

	test('Clicking on close button', () => {
		const mockOnClose = jest.fn();
		const { container } = render(
			<ModalTopBar onCloseButton={mockOnClose} hideCloseButton={false}>
				Foo
			</ModalTopBar>,
		);
		const closeButton = getByTestId(container, 'modal-close-button');
		fireEvent.click(closeButton);
		expect(mockOnClose).toHaveBeenCalled();
	});
});
