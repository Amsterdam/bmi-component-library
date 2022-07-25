import React, { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormInput } from './FormInput';
import { Label } from '../Label/Label';
import { Default as DefaultLabelStory } from '../Label/Label.stories';
import { useForm } from 'react-hook-form';
import { generateDisabledControls, handleSubmitSuccess, handleSubmitError } from '../../utils/storybook';
import { Button } from '@amsterdam/asc-ui';
import { DevTool } from '@hookform/devtools';

type FormFields = {
	storybook: string;
};

export default {
	title: 'Form/Input/FormInput',
	component: FormInput,
	argTypes: {
		['aria-invalid']: { control: 'boolean' },
		disabled: { control: 'boolean' },
		type: { options: ['text', 'email'] },
		...generateDisabledControls(['register', 'errors', 'aria-invalid', 'ref']),
	},
	parameters: {
		docs: {
			source: {
				type: 'code', // see bug: https://github.com/storybookjs/storybook/issues/12747 , perhaps set this globally?
			},
		},
	},
} as ComponentMeta<typeof FormInput>;

const Template: ComponentStory<typeof FormInput> = ({ label, rules, id, placeholder, type }) => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormFields>();

	const onSubmit = handleSubmit(handleSubmitSuccess, handleSubmitError);

	return (
		<form onSubmit={onSubmit}>
			<Label htmlFor={id} label={label} {...DefaultLabelStory}>
				<FormInput<FormFields>
					id={id}
					type={type}
					name="storybook"
					label={label}
					placeholder={placeholder}
					register={register}
					errors={errors}
					rules={rules}
				/>
			</Label>
			<br></br>
			<Button type="submit">Submit</Button>
			<DevTool control={control} /> {/* set up the dev tool */}
		</form>
	);
};

export const Default = Template.bind({});
Default.args = {
	label: 'Label',
	name: 'storybook',
	placeholder: 'Placeholder',
	type: 'text',
	id: 'storybook',
	rules: { required: 'You must enter a value.' },
};
