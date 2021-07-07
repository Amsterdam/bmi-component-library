//@ts-nocheck

import React from 'react';
import { cleanup, render } from '../../../test-utils/customRender';
import * as isTouchModule from '@amsterdam/asc-ui/lib/utils/hooks/useDetectTouchScreen';
import EditableInput from './EditableInput';
import userEvent from '@testing-library/user-event';

jest.mock('@amsterdam/asc-ui/lib/utils/hooks/useDetectTouchScreen');

describe('<EditableInput />', () => {
	let queryByTestId: Function;
	let label: any;
	isTouchModule.default.mockReturnValue(true);

	beforeEach(() => {
		cleanup();
		({ queryByTestId } = render(<EditableInput id="test-editable-input" data="blbl" />));
		label = queryByTestId('editable-label');
	});

	it('should render correctly', () => {
		expect(queryByTestId('editable-label')).toBeInTheDocument();
	});

	it('on touchscreen it should render input with one click on label', () => {
		expect(queryByTestId('editable-input')).toBeFalsy();
		userEvent.click(label);
		expect(queryByTestId('editable-input')).toBeTruthy();
	});

	it('on desktop it should render input with a double click on label', () => {
		expect(queryByTestId('editable-input')).toBeFalsy();
		isTouchModule.default.mockReturnValue(false);
		userEvent.dblClick(label);

		expect(queryByTestId('editable-input')).toBeTruthy();
	});

	// it('should clear the input after clicking the clearbutton', () => {
	// 	userEvent.click(label);
	// 	expect(getByTestId('editable-input').DOCUMENT_FRAGMENT_NODE.valueOf('dfsdf'));
	// });
});
//if restore button clicked the input should be restores
