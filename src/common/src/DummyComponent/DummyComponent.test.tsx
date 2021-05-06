import React from 'react';
import { render } from '@testing-library/react';
import DummyComponent from './DummyComponent';

describe('<DummyComponent />', () => {
	it('should render correctly', () => {
		const { getByTestId } = render(<DummyComponent label="__LABEL__" text="__TEXT__" />);
		expect(getByTestId('dummy-component')).toBeDefined();
	});

	it('should render the correct label and text', () => {
		const { getByText } = render(<DummyComponent label="__LABEL__" text="__TEXT__" />);
		expect(getByText('__LABEL__')).toBeInTheDocument();
		expect(getByText('__TEXT__')).toBeInTheDocument();
	});
});
