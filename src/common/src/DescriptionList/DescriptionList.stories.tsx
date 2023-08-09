import { Link, Tag } from '@amsterdam/asc-ui';
import type { StoryFn, Meta } from '@storybook/react';
import DescriptionList from './DescriptionList';

const meta: Meta<typeof DescriptionList> = {
	title: 'common/DescriptionList',
	component: DescriptionList,
};

const Template: StoryFn<React.ComponentProps<typeof DescriptionList>> = (args) => <DescriptionList {...args} />;

const descriptionList: React.ComponentProps<typeof DescriptionList>['list'] = [
	{
		label: 'Datum',
		value: '12-03-2021',
	},
	{
		label: 'Batch',
		value: 'Werkpakket Ingenieursdiensten contract PBK',
	},
	{
		label: 'Conditie',
		value: <Tag>Redelijk</Tag>,
	},
];

export const Default = Template.bind({});
Default.args = {
	heading: 'Ingenieursbureau werkpakket PBK',
	list: descriptionList,
};

export const WithoutHeader = Template.bind({});
WithoutHeader.args = {
	list: descriptionList,
};

export const WithLinks = Template.bind({});
WithLinks.args = {
	list: [
		{
			label: 'Naam',
			value: (
				<Link
					variant="inline"
					href="#"
					onClick={(evt: React.MouseEvent<HTMLAnchorElement>) => evt.preventDefault()}
				>
					BRU0315 Galgenbrug
				</Link>
			),
		},
		{
			label: 'Locatie',
			value: 'Dijksgracht (centrum)',
		},
		{
			label: 'Type',
			value: 'Brug (vast)',
		},
		{
			label: 'Bouwjaar',
			value: '1879',
		},
	],
	footer: (
		<Link variant="inline" href="#" onClick={(evt: React.MouseEvent<HTMLAnchorElement>) => evt.preventDefault()}>
			Toon paspoortgegevens
		</Link>
	),
};

export default meta;
