import type { StoryFn, Meta } from '@storybook/react';
import { Button, Paragraph } from '@amsterdam/asc-ui';
import ModalActions from './ModalActions';
import { generateDisabledControls } from '../../../../utils/storybook';

const disabledControls = generateDisabledControls(['children']);

const meta: Meta<typeof ModalActions> = {
	title: 'common/Modal/ModalActions',
	component: ModalActions,
	argTypes: {
		...disabledControls,
	},
};

const TemplateSingleChild: StoryFn<typeof ModalActions> = (args) => {
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

const TemplateSplit: StoryFn<typeof ModalActions> = (args) => {
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

const TemplateSplitMultiRow: StoryFn<typeof ModalActions> = (args) => {
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

export default meta;
