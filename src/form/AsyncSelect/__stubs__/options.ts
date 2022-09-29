import { options as options_ } from '../../Select/__stubs__/options';

export const options = options_;

export function asyncOptions(value: string): Promise<{ label: string; value: string }[]> {
	return new Promise((resolve) =>
		resolve(options.filter(({ label }) => label.toLowerCase().includes(value.toLowerCase()))),
	);
}
