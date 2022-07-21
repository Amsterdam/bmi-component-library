import { ManifestationRow } from '../DecompositionTable';

export function isManifestationRow(row: any): row is ManifestationRow {
	return !!row?.unitId;
}
