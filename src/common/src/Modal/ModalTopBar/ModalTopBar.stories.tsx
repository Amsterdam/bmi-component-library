import React from 'react';
import { ComponentStory } from '@storybook/react';
import ModalTopBar, { Props } from './ModalTopBar';
import { generateDisabledControls } from '../../../../utils/storybook';

const disabledControls = generateDisabledControls(['children']);

export default {
	title: 'common/Modal/ModalTopBar',
	component: ModalTopBar as Props,
	argTypes: {
		...disabledControls,
	},
};

const Template: ComponentStory<typeof ModalTopBar> = (args) => {
	return <ModalTopBar {...args}>Afgerond - Assetnaam</ModalTopBar>;
};

export const Default = Template.bind({});
