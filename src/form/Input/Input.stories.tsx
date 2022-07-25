import React, { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';

export default {
	title: 'Form/Input',
	component: Input,
	argTypes: {
		['aria-invalid']: { control: 'boolean' },
		disabled: { control: 'boolean' },
		type: { options: ['text', 'email'] },
	},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

// const TemplateWithLabel: ComponentStory<typeof Input> = (args) => (
//   <Label label="a label" htmlFor="some-input">
//     <Input name="some-input" {...args} />
//   </Label>
// )

export const Default = Template.bind({});
// Default.args = {
//   disabled: false,
//   error: false,
//   errorMessage: '',
// }

// export const Labeled = TemplateWithLabel.bind({
//   ...Default.args,
//   label: 'Label',
//   placeholder: 'Placeholder',
// })
