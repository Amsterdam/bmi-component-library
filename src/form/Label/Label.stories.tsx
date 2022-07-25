import React, { ComponentStory, ComponentMeta } from '@storybook/react';
import { Label } from './Label';
import { Input } from '../Input/Input';
import { Default as DefaultInput } from '../Input/Input.stories';

export default {
	title: 'Form/Label',
	component: Label,
	argTypes: {
		label: { control: 'text' }, // force a text control for the label
	},
	args: {
		label: 'Label',
	},
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

const TemplateWithInput: ComponentStory<typeof Label> = (args) => (
	<Label {...args} htmlFor="some-input">
		<Input id="id" label="label" name="some-input" {...DefaultInput.args} />
	</Label>
);

export const Default = Template.bind({});

export const WithInput = TemplateWithInput.bind({});
