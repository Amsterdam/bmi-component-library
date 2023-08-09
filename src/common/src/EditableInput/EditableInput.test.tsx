import { cleanup, render, fireEvent } from '~/tests/helpers/customRender';
import * as isTouchModule from '@amsterdam/asc-ui/lib/utils/hooks/useDetectTouchScreen';
import EditableInput from './EditableInput';
import userEvent from '@testing-library/user-event';

jest.mock('@amsterdam/asc-ui/lib/utils/hooks/useDetectTouchScreen');

describe('<EditableInput />', () => {
	let queryByTestId: Function;
	// @ts-ignore
	isTouchModule.default.mockReturnValue(true);

	beforeEach(() => {
		cleanup();
		({ queryByTestId } = render(<EditableInput id="test-editable-input" data="test" />));
	});

	it('should render correctly', () => {
		expect(queryByTestId('editable-input')).toBeInTheDocument();
	});

	it('should clear the input after clicking the clearbutton', async () => {
		const clearButton = queryByTestId('input-clear-button');
		await userEvent.click(clearButton);
		expect(queryByTestId('editable-input').value).toBe('');
	});

	it('should restore the input to the original value', async () => {
		const input = queryByTestId('editable-input');
		fireEvent.change(input, { target: { value: 'a' } });
		expect(queryByTestId('editable-input').value).toBe('a');

		const restoreIcon = queryByTestId('input-restore-button');
		await userEvent.click(restoreIcon);
		expect(queryByTestId('editable-input').value).toBe('test');
	});
});
