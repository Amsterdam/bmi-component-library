import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ModalTopBar from './ModalTopBar';
import { generateDisabledControls } from '../../../../utils/storybook';

const disabledControls = generateDisabledControls(['children']);

export default {
	title: 'common/Modal/ModalTopBar',
	component: ModalTopBar,
	argTypes: {
		...disabledControls,
	},
} as ComponentMeta<typeof ModalTopBar>;

const Template: ComponentStory<typeof ModalTopBar> = (args) => {
	return <ModalTopBar {...args}>Afgerond - Assetnaam</ModalTopBar>;
};

export const Default = Template.bind({});
