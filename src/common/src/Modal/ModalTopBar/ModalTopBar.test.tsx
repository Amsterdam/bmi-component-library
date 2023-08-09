import { render, fireEvent, getByTestId, queryByText, queryByTestId } from '@testing-library/react';
import ModalTopBar from './ModalTopBar';

describe('<ModalTopBar />', () => {
	it('should render', () => {
		const { container } = render(<ModalTopBar>Foo</ModalTopBar>);
		expect(container.firstElementChild).toBeDefined();
		expect(getByTestId(container, 'modal-top-bar')).toBeInTheDocument();
		expect(queryByText(container, 'Foo')).toBeInTheDocument();
		expect(container.querySelector('hr')).toBeInTheDocument();
	});

	it('should render with close button, when hideCloseButton is false', () => {
		const { container } = render(<ModalTopBar hideCloseButton={false}>Foo</ModalTopBar>);
		expect(getByTestId(container, 'modal-close-button')).toBeDefined();
	});

	it('should render without close button, when hideCloseButton is true', () => {
		const { container } = render(<ModalTopBar hideCloseButton>Foo</ModalTopBar>);
		expect(queryByTestId(container, 'modal-close-button')).not.toBeInTheDocument();
	});

	it('should render with close button as default', () => {
		const { container } = render(<ModalTopBar>Foo</ModalTopBar>);
		expect(getByTestId(container, 'modal-close-button')).toBeDefined();
	});

	it('Divider and header styling change, when hideDivider is false', () => {
		const { container } = render(<ModalTopBar hideDivider={false}>Foo</ModalTopBar>);
		const divider = container.querySelector('hr');

		const style = window.getComputedStyle(divider as Element);
		expect(style.backgroundColor).not.toBe('transparent');
		expect(style.backgroundColor).not.toBe('');

		const header = getByTestId(container, 'modal-top-bar');
		expect(header).not.toHaveStyleRule('margin-bottom', '0');
	});

	it('Divider and header styling change, when hideDivider is true', () => {
		const { container } = render(<ModalTopBar hideDivider>Foo</ModalTopBar>);
		const divider = container.querySelector('hr');
		const style = window.getComputedStyle(divider as Element);
		expect(style.backgroundColor).toBe('transparent');

		const header = getByTestId(container, 'modal-top-bar');
		expect(header).toHaveStyleRule('margin-bottom', '0');
	});

	it('Divider should be transparent as default', () => {
		const { container } = render(<ModalTopBar>Foo</ModalTopBar>);
		const divider = container.querySelector('hr');
		const style = window.getComputedStyle(divider as Element);
		expect(style.backgroundColor).toBe('transparent');
	});

	test('Clicking on close button', () => {
		const mockOnClose = jest.fn();
		const { container } = render(<ModalTopBar onCloseButton={mockOnClose}>Foo</ModalTopBar>);
		const closeButton = getByTestId(container, 'modal-close-button');
		fireEvent.click(closeButton);
		expect(mockOnClose).toHaveBeenCalled();
	});
});
