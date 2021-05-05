import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import DummyComponent from './DummyComponent';

//👇 This default export determines where your story goes in the story list
export default {
	title: 'common/DummyComponent',
	component: DummyComponent,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof DummyComponent>> = (args) => <DummyComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
	/*👇 The args you need here will depend on your component */
	label: 'Welcome at the component library',
	text: 'In the panel to your left you can find several components',
};
