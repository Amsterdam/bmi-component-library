import { md5 } from 'hash-wasm';

/**
 * Calculate the md5 hash of the given source data
 *
 * @param source
 */
const getHash = async (source: Blob) => {
	const buffer = await source.arrayBuffer();

	return md5(new Uint8Array(buffer));
};

export { getHash };
