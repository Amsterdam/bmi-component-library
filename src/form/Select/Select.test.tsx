import { render, screen, waitFor } from '@testing-library/react';
import selectEvent from 'react-select-event';
import Select from './Select';
import { options } from './__stubs__/options';

describe('<Select />', () => {
	it('should render', async () => {
		render(<Select placeholder="Selecteer een optie" options={options}></Select>);
		await waitFor(() => {
			expect(screen.getByText('Selecteer een optie')).toBeInTheDocument();
		});
	});

	it('should render with a default value', async () => {
		render(
			<Select
				options={options}
				defaultValue={{ label: 'Milieutechnisch onderzoek', value: 'Milieutechnisch onderzoek' }}
			></Select>,
		);
		await waitFor(() => {
			expect(screen.getByText('Milieutechnisch onderzoek')).toBeInTheDocument();
		});
	});

	it('should pass its value to the form', async () => {
		render(
			<form data-testid="form">
				<label htmlFor="object-type">Object type</label>
				<Select options={options} name="objectType" inputId="object-type" isMulti />
			</form>,
		);

		await waitFor(() => {
			expect(screen.getByTestId('form')).toHaveFormValues({ objectType: '' }); // empty select
		});

		// select two values...
		const optionLabelsToSelect = options.slice(0, 2).map((option) => option.label);
		const optionValuesToSelect = options.slice(0, 2).map((option) => option.value);
		selectEvent.select(screen.getByLabelText('Object type'), optionLabelsToSelect);

		await waitFor(() => {
			expect(screen.getByTestId('form')).toHaveFormValues({ objectType: optionValuesToSelect });
		});
	});
});
