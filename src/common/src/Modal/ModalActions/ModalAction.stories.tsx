import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, Paragraph } from '@amsterdam/asc-ui';
import ModalActions from './ModalActions';
import { generateDisabledControls } from '../../../../utils/storybook';

const disabledControls = generateDisabledControls(['children']);

export default {
	title: 'common/Modal/ModalActions',
	component: ModalActions,
	argTypes: {
		...disabledControls,
	},
} as ComponentMeta<typeof ModalActions>;

const TemplateSingleChild: ComponentStory<typeof ModalActions> = (args) => {
	return (
		<ModalActions {...args}>
			<ModalActions.Right>
				<Button variant="primaryInverted">Vorige</Button>
				<Button variant="secondary" taskflow>
					Volgende
				</Button>
			</ModalActions.Right>
		</ModalActions>
	);
};

const TemplateSplit: ComponentStory<typeof ModalActions> = (args) => {
	return (
		<ModalActions {...args}>
			<ModalActions.Left>
				<Button variant="primaryInverted">Annuleren</Button>
			</ModalActions.Left>
			<ModalActions.Right>
				<Button variant="primaryInverted">Vorige</Button>
				<Button variant="secondary">Volgende</Button>
			</ModalActions.Right>
		</ModalActions>
	);
};

const TemplateSplitMultiRow: ComponentStory<typeof ModalActions> = (args) => {
	return (
		<ModalActions {...args}>
			<ModalActions.Right>
				<Paragraph>
					Laboris dolor enim ex qui esse id nisi qui officia aliquip enim dolore est. Ex veniam proident
					incididunt magna dolor do ad. Cillum mollit deserunt laboris est.
				</Paragraph>
			</ModalActions.Right>
			<ModalActions.Left>
				<Button variant="primaryInverted">Annuleren</Button>
			</ModalActions.Left>
			<ModalActions.Right>
				<Button variant="primaryInverted">Vorige</Button>
				<Button variant="secondary" taskflow>
					Volgende
				</Button>
			</ModalActions.Right>
		</ModalActions>
	);
};
export const SingleStyle = TemplateSingleChild.bind({});
export const SplitStyle = TemplateSplit.bind({});
export const SplitStyleMulti = TemplateSplitMultiRow.bind({});