import type { StoryFn, Meta } from '@storybook/react';
import DocumentTable from './DocumentTable';
import { documents } from '../DocumentTable/__stubs__/documents';

const meta: Meta<typeof DocumentTable> = {
	title: 'common/DocumentTable',
	component: DocumentTable,
};

const Template: StoryFn<React.ComponentProps<typeof DocumentTable>> = (args) => {
	return <DocumentTable {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	rows: documents,
	disableFilterRow: false,
	disableRemoval: false,
	pageSize: 3,
};

export const NoFilter = Template.bind({});
NoFilter.args = {
	rows: documents,
	disableFilterRow: true,
	disableRemoval: false,
	pageSize: 4,
};

export const Loading = Template.bind({});
Loading.args = {
	rows: [],
	disableFilterRow: false,
	disableRemoval: false,
	loading: true,
	pageSize: 3,
};

export default meta;
