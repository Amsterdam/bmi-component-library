import { render } from '@testing-library/react';
import selectEvent from 'react-select-event';
import CreatableSelect, { Props } from './CreatableSelect';
import { options as defaultOptions } from './__stubs__/options';

describe('<CreatableSelect />', () => {
	const renderCreatableSelect = ({
		inputId = 'creatable-test',
		name = 'creatable-test',
		options = defaultOptions,
		label,
		...props
	}: Partial<Props>) => {
		const result = render(
			<form role="form">
				<CreatableSelect inputId={inputId} name={name} label={label} isClearable options={options} {...props} />
			</form>,
		);
		const { getByRole, getByLabelText } = result;
		return { ...result, form: getByRole('form'), input: getByLabelText(label ?? '') };
	};

	test('Renders optional label', () => {
		const { getByLabelText } = renderCreatableSelect({
			label: 'Documentomschrijving',
		});
		expect(getByLabelText('Documentomschrijving')).toBeInTheDocument();
	});

	test('Allows creating a new option', async () => {
		const onChangeMock = jest.fn();
		const { form, input } = renderCreatableSelect({
			label: 'Documentomschrijving',
			createLabel: 'Create', // Expected by react-select-event
			onChange: onChangeMock,
		});
		expect(form).toHaveFormValues({});
		await selectEvent.create(input, '__NEW_OPTION__', {
			// onchange is not triggered with onCreateOption causing selectEvent to fail without this
			waitForElement: false,
		});
		await selectEvent.select(input, '__NEW_OPTION__');
		expect(form).toHaveFormValues({ 'creatable-test': '__NEW_OPTION__' });
		expect(onChangeMock).toHaveBeenCalledWith(
			{ __isNew__: true, label: '__NEW_OPTION__', value: '__NEW_OPTION__' },
			{
				action: 'create-option',
				name: 'creatable-test',
				option: { __isNew__: true, label: '__NEW_OPTION__', value: '__NEW_OPTION__' },
			},
		);
	});

	test('onCreateOption() callback is triggered when creating a new option', async () => {
		const createOptionMock = jest.fn();
		const { form, input } = renderCreatableSelect({
			onCreateOption: createOptionMock,
			label: 'Documentomschrijving',
			createLabel: 'Create', // Expected by react-select-event
		});
		expect(form).toHaveFormValues({});
		await selectEvent.create(input, '__NEW_OPTION__', {
			waitForElement: false,
		});
		expect(createOptionMock).toHaveBeenCalledWith('__NEW_OPTION__');
	});

	test('onChange() callback is triggered when selecting an option', async () => {
		const onChangeMock = jest.fn();
		// const createOptionMock = jest.fn();
		const { form, input } = renderCreatableSelect({
			// onCreateOption: createOptionMock,
			onChange: onChangeMock,
			label: 'Documentomschrijving',
			createLabel: 'Create', // Expected by react-select-event
		});
		expect(form).toHaveFormValues({});
		await selectEvent.select(input, defaultOptions[0].label);

		expect(onChangeMock).toHaveBeenCalledWith(
			{
				label: 'Archeologisch (voor)onderzoek',
				value: 'archeologischvooronderzoek',
			},
			{ action: 'select-option', name: 'creatable-test', option: undefined },
		);
	});
});
