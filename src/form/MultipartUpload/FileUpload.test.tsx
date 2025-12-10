import { render } from '@testing-library/react';
import { FileUpload } from '@form/MultipartUpload/FileUpload';

describe('<FileUpload />', () => {
	it('should render correctly', () => {
		const id = 'simple-upload';
		const result = render(<FileUpload name={id} limit={2048} />);

		// Assert that element is created
		expect(result.getByTestId(id)).toBeDefined();
	});
});
