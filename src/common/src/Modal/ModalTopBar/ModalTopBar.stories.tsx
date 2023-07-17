import { StoryFn, Meta } from '@storybook/react';
import ModalTopBar from './ModalTopBar';
import { generateDisabledControls } from '../../../../utils/storybook';

const disabledControls = generateDisabledControls(['children']);

const meta: Meta<typeof ModalTopBar> = {
	title: 'common/Modal/ModalTopBar',
	component: ModalTopBar,
	argTypes: {
		...disabledControls,
	},
};

const Template: StoryFn<typeof ModalTopBar> = (args) => {
	return <ModalTopBar {...args}>Afgerond - Assetnaam</ModalTopBar>;
};

export const Default = Template.bind({});

export default meta;
