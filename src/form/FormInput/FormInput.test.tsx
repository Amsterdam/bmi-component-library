import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormInput } from './FormInput';
import { useForm } from 'react-hook-form';
import { Button } from '@amsterdam/asc-ui';

type FormFields = {
	test: string;
};

jest.useFakeTimers();

describe('<FormInput />', () => {
	const requiredMessage = 'This field is required';
	const placeholder = 'Placeholder';

	const onSubmit = jest.fn();
	const onInvalid = jest.fn();

	function Wrapper({ onSubmitSuccess, onSubmitError } = { onSubmitSuccess: jest.fn(), onSubmitError: jest.fn() }) {
		const methods = useForm<FormFields>();
		const {
			register,
			handleSubmit,
			formState: { errors },
		} = methods;

		const onSubmit = handleSubmit(onSubmitSuccess, onSubmitError);

		return (
			<form onSubmit={onSubmit}>
				<FormInput
					id="test"
					name="test"
					label="test"
					placeholder={placeholder}
					type="text"
					register={register}
					errors={errors}
					rules={{ required: requiredMessage }}
				/>
				<Button type="submit">Submit</Button>
			</form>
		);
	}
	afterEach(() => {
		jest.resetAllMocks();
	});

	describe('component behaviour', () => {
		const user = userEvent.setup({ delay: null }); // see https://github.com/testing-library/user-event/issues/833
		let input: any;
		let button: any;

		beforeEach(() => {
			render(<Wrapper onSubmitSuccess={onSubmit} onSubmitError={onInvalid} />);
			input = screen.getByPlaceholderText(placeholder);
			button = screen.getByRole('button');
		});

		it('should render the expected elements', () => {
			expect(input).toBeVisible();
			expect(button).toBeVisible();
			expect(screen.queryByRole('alert')).not.toBeInTheDocument();
		});

		it('should trigger onInvalid when an empty field is submitted', async () => {
			await user.click(button);
			expect(onInvalid).toHaveBeenCalledTimes(1);
			expect(onSubmit).toHaveBeenCalledTimes(0);

			expect(screen.getByText(requiredMessage)).toBeInTheDocument();
			expect(input).toHaveAttribute('aria-invalid', 'true');
		});

		it('should trigger onInvalid when an empty field is submitted', async () => {
			const value = 'test-value';
			await user.type(input, value);
			await user.click(button);
			expect(onInvalid).toHaveBeenCalledTimes(0);
			expect(onSubmit).toHaveBeenCalledTimes(1);

			expect(onSubmit.mock.calls[0][0].test).toBe(value);
			expect(screen.queryByText(requiredMessage)).not.toBeInTheDocument();
			expect(input).toHaveAttribute('aria-invalid', 'false');
		});
	});
});
