import React from 'react';
import { render } from '@testing-library/react';
import DecompositionTable from './DecompositionTable';
import { Props } from './DecompositionTable';
import { decomposition } from './__stubs__/documents';

describe('<StyledDecompositionTable />', (props: Partial<Props> = {}) => {
	test('renders', () => {
		const { container } = render(<DecompositionTable decomposition={decomposition} />);
		expect(container).toBeInTheDocument();
	});
});
