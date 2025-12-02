import { calculateParts } from '@bmi-component-library/form/MultipartUpload/PayloadIterator';

describe('PayloadIterator', () => {
	describe('calculateParts', () => {
		const dataSet = [
			[896581, 2048, 1],
			[481218458, 2048, 230],
			[22588411, 2048, 11],
			[4932370, 2048, 3],
			[58495600, 2048, 28],
			[896581, 10040, 1],
			[481218458, 10040, 47],
			[22588411, 10040, 3],
			[4932370, 10040, 1],
			[58495600, 10040, 6],
		];
		it.each(dataSet)(
			'should return the correct amount of parts',
			(size: number, limit: number, expectedValue: number) => {
				const result = calculateParts(size, limit * 1024);

				expect(result).toEqual(expectedValue);
			},
		);
	});
});
