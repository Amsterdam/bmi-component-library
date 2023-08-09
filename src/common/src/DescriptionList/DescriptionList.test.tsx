import type { FC, ComponentProps } from 'react';
import { render, screen } from '@testing-library/react';
import DescriptionList from './DescriptionList';

const list: ComponentProps<typeof DescriptionList>['list'] = [
	{
		label: 'Datum',
		value: '12-03-2021',
	},
	{
		label: 'Batch',
		value: 'Werkpakket Ingenieursdiensten contract PBK',
	},
];

const DummyReactComponent: FC = () => <p>__REACT_COMPONENT__</p>;

describe('<DescriptionList />', () => {
	it('should render correctly', () => {
		const { getByTestId } = render(<DescriptionList heading="__HEADING__" list={list} />);
		expect(getByTestId('description')).toBeDefined();
		expect(getByTestId('description-list')).toBeDefined();
	});

	it('should render the correct heading', () => {
		const { getByText } = render(<DescriptionList heading="__HEADING__" list={list} />);
		expect(getByText('__HEADING__')).toBeInTheDocument();
	});

	it('should render the correct list items', () => {
		const { getByText } = render(<DescriptionList list={list} />);

		expect(getByText('Datum')).toBeInTheDocument();
		expect(getByText('12-03-2021')).toBeInTheDocument();

		expect(getByText('Batch')).toBeInTheDocument();
		expect(getByText('Werkpakket Ingenieursdiensten contract PBK')).toBeInTheDocument();
	});

	it('should render the correct list items with a React node', () => {
		const { getByText } = render(
			<DescriptionList list={[...list, { label: '', value: <DummyReactComponent /> }]} />,
		);
		expect(getByText('__REACT_COMPONENT__')).toBeInTheDocument();
	});

	it('optionally renders a footer with a React node', () => {
		render(
			<DescriptionList list={[...list, { label: '', value: <DummyReactComponent /> }]} footer={<>[FOOTER]</>} />,
		);
		expect(screen.getByTestId('description-footer').textContent).toEqual('[FOOTER]');
	});
});
