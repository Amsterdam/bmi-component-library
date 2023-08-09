import { render, screen, waitFor } from '@testing-library/react';
import selectEvent from 'react-select-event';
import AsyncSelect from './AsyncSelect';
import { asyncOptions, options } from './__stubs__/options';

describe('<AsyncSelect />', () => {
	it('should render', async () => {
		render(<AsyncSelect placeholder="Selecteer een optie" loadOptions={asyncOptions}></AsyncSelect>);
		await waitFor(() => {
			expect(screen.getByText('Selecteer een optie')).toBeInTheDocument();
		});
	});

	it('should render with a default value', async () => {
		render(
			<AsyncSelect
				loadOptions={asyncOptions}
				defaultValue={{ label: 'Milieutechnisch onderzoek', value: 'Milieutechnisch onderzoek' }}
			></AsyncSelect>,
		);
		await waitFor(() => {
			expect(screen.getByText('Milieutechnisch onderzoek')).toBeInTheDocument();
		});
	});

	it('should pass its value to the form', async () => {
		render(
			<form data-testid="form">
				<label htmlFor="object-type">Object type</label>
				<AsyncSelect loadOptions={asyncOptions} name="objectType" inputId="object-type" isMulti />
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
