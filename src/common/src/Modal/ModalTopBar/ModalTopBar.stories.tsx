import type { Meta, StoryFn } from '@storybook/react';
import ModalTopBar from './ModalTopBar';
import type { ModalTopBarProps } from './ModalTopBar';
import { generateDisabledControls } from '@utils/storybook';

const disabledControls = generateDisabledControls<ModalTopBarProps>(['children']);

const meta: Meta<ModalTopBarProps> = {
	title: 'common/Modal/ModalTopBar',
	component: ModalTopBar,
	argTypes: {
		...disabledControls,
	},
};

const Template: StoryFn<ModalTopBarProps> = (args) => {
	return <ModalTopBar {...args}>Afgerond - Assetnaam</ModalTopBar>;
};

export const Default = Template.bind({});

export default meta;
