import { UnitRow } from '../DecompositionTable';

export function isUnitRow(row: any): row is UnitRow {
	return !!row?.elementId;
}
