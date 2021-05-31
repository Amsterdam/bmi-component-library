import React from 'react';
import Modal from './Modal';
import { fireEvent } from '@testing-library/react';
import { render } from '../../../test-utils/customRender';

describe('<Modal />', () => {
	it('should call onClose when user clicks on the close button', () => {
		const onCloseMock = jest.fn();

		const { getByTestId } = render(
			<Modal id="test-modal" onClose={onCloseMock} open>
				<Modal.TopBar>Heading</Modal.TopBar>
				<Modal.Content>Content</Modal.Content>
			</Modal>,
		);

		expect(onCloseMock).not.toHaveBeenCalled();

		const closeButton = getByTestId('modal-close-button');

		fireEvent.click(closeButton);

		expect(onCloseMock).toHaveBeenCalled();
	});

	it('should not contain a close button when not given', () => {
		const { queryByTestId } = render(
			<Modal id="test-modal" open>
				<Modal.TopBar hideCloseButton={true}>Heading</Modal.TopBar>
				<Modal.Content>Content</Modal.Content>
			</Modal>,
		);

		expect(queryByTestId('modal-close-button')).not.toBeInTheDocument();
	});

	test('should render with TopBar, Content and Actions', () => {
		const { queryByText } = render(
			<Modal id="test-modal" open>
				<Modal.TopBar>Heading</Modal.TopBar>
				<Modal.Content>Content</Modal.Content>
				<Modal.Actions>Footer or actions</Modal.Actions>
			</Modal>,
		);
		expect(queryByText('Heading')).toBeInTheDocument();
		expect(queryByText('Content')).toBeInTheDocument();
		expect(queryByText('Footer or actions')).toBeInTheDocument();
	});
});
