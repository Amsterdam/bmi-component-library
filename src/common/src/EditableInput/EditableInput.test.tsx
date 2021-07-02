//@ts-nocheck

import React from 'react';
import { cleanup, render } from '../../../test-utils/customRender';
import EditableInput from './EditableInput';
import userEvent from '@testing-library/user-event';

describe('<EditableInput />', () => {
	let getByTestId: Function;
	let queryByTestId: Function;

	jest.mock('@amsterdam/asc-ui/lib/utils/hooks/');
	const isTouchScreenMock = jest.fn();

	beforeEach(() => {
		cleanup();
		({ getByTestId, queryByTestId } = render(<EditableInput id="test-editable-input" />));
	});

	it('should render correctly', () => {
		expect(getByTestId('editable-label')).toBeInTheDocument();
	});

	it('on touchscreen it should render input with one click on label', () => {
		expect(queryByTestId('editable-input')).toBeFalsy();
		isTouchScreenMock.mockReturnValue(false);
		const label = getByTestId('editable-label');
		userEvent.click(label);
		expect(queryByTestId('editable-input')).toBeTruthy();
	});

	it('on desktop it should render input with a double click on label', () => {
		expect(queryByTestId('editable-input')).toBeFalsy();
		isTouchScreenMock.mockReturnValue(false);
		const label = getByTestId('editable-label');
		console.log(label);
		userEvent.dblClick(label);
		expect(queryByTestId('editable-input')).toBeTruthy();
	});
});

//if clear button clicked input should be empty
//if restore button clicked the input should be restores
