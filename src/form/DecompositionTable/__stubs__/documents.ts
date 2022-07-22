import { DecompositionRow, ElementRow, ManifestationRow, UnitRow } from '../DecompositionTable';

const objectId = '9e267f06-6072-4db9-ba0e-e4adccafa0a9';
const surveyId = '555db989-beeb-b1ea-109e-186686dc08a1';

export const manifestations = [
	{
		code: '2049-1',
		conditionId: '1',
		constructionYear: 1999,
		deletedAt: '1',
		elementId: '1',
		id: '11',
		location: 'Amsterdam Centrum',
		material: '',
		name: 'Aandrijving en bewegingswerk; elektromechanisch, Algemeen-1',
		objectId: objectId,
		observationPointId: '1',
		quantity: 2,
		quantityUnitOfMeasurement: 'pcs',
		surveyId: surveyId,
		unitId: '1',
	},
	{
		code: '2049-2',
		conditionId: '1',
		constructionYear: 1999,
		deletedAt: '1',
		elementId: '1',
		id: '12',
		location: 'Amsterdam Centrum',
		material: '',
		name: 'Aandrijving en bewegingswerk; elektromechanisch, Algemeen-1',
		objectId: objectId,
		observationPointId: '1',
		quantity: 2,
		quantityUnitOfMeasurement: 'pcs',
		surveyId: surveyId,
		unitId: '1',
	},
	{
		code: '2049-2',
		conditionId: '1',
		constructionYear: 1999,
		deletedAt: '1',
		elementId: '1',
		id: '13',
		location: 'Amsterdam Centrum',
		material: '',
		name: 'Aandrijving en bewegingswerk; elektromechanisch, Algemeen-1',
		objectId: objectId,
		observationPointId: '1',
		quantity: 2,
		quantityUnitOfMeasurement: 'pcs',
		surveyId: surveyId,
		unitId: '1',
	},
];

export const decompositionFromgraphQL = [
	{
		categoryId: '1',
		code: '147',
		conditionId: '1',
		constructionType: '1',
		constructionYear: 1999,
		deletedAt: '1',
		elementGroupName: '1',
		gisibId: 123,
		id: '1',
		isArchived: false,
		isElectrical: false,
		isElectricalObjectSpecific: false,
		isRelevant: true,
		isStructural: true,
		isStructuralObjectSpecific: true,
		location: 'Amsterdam Centrum',
		name: 'Hoofddraagcontructie',
		objectId: objectId,
		observationPointId: '1',
		surveyId: surveyId,
		units: [
			{
				code: '1345',
				conditionId: '2',
				constructionYear: 1989,
				deletedAt: '0',
				elementId: '1',
				gisibId: 345,
				id: '21',
				isElectrical: false,
				isElectricalObjectSpecific: false,
				isRelevant: false,
				isStructural: false,
				isStructuralObjectSpecific: false,
				location: 'Amsterdam Centrum',
				material: 'CementBeton',
				name: 'Afdekplaat',
				objectId: objectId,
				observationPointId: '1',
				quantity: 1,
				quantityUnitOfMeasurement: 'm2',
				surveyId: surveyId,
				manifestations: manifestations,
			},
			{
				code: '1347',
				conditionId: '2',
				constructionYear: 1989,
				deletedAt: '0',
				elementId: '1',
				gisibId: 346,
				id: '22',
				isElectrical: false,
				isElectricalObjectSpecific: false,
				isRelevant: false,
				isStructural: false,
				isStructuralObjectSpecific: false,
				location: 'Amsterdam Centrum',
				material: 'Beton',
				name: 'Langsligger',
				objectId: objectId,
				observationPointId: '1',
				quantity: 3,
				quantityUnitOfMeasurement: 'm2',
				surveyId: surveyId,
			},
		],
	},
	{
		categoryId: '1',
		code: '157',
		conditionId: '1',
		constructionType: '1',
		constructionYear: 1999,
		deletedAt: '1',
		elementGroupName: '1',
		gisibId: 124,
		id: '2',
		isArchived: false,
		isElectrical: false,
		isElectricalObjectSpecific: false,
		isRelevant: true,
		isStructural: true,
		isStructuralObjectSpecific: true,
		location: 'Amsterdam Centrum',
		name: 'Kerende constructie',
		objectId: objectId,
		observationPointId: '1',
		surveyId: surveyId,
		units: [],
	},
	{
		categoryId: '1',
		code: '4242',
		conditionId: '1',
		constructionType: '1',
		constructionYear: 1979,
		deletedAt: '1',
		elementGroupName: '1',
		gisibId: 125,
		id: '3',
		isArchived: false,
		isElectrical: false,
		isElectricalObjectSpecific: false,
		isRelevant: true,
		isStructural: true,
		isStructuralObjectSpecific: true,
		location: 'Amsterdam Centrum',
		name: 'Brandblusinstallatie',
		objectId: objectId,
		observationPointId: '1',
		surveyId: surveyId,
		units: [],
	},
];

export const decomposition: DecompositionRow[] = decompositionFromgraphQL.reduce((accumulator: any, element: any) => {
	const { id, code, name, quantity, location, constructionYear, isRelevant } = element;
	accumulator.push({
		id,
		code,
		name,
		quantity,
		location,
		constructionYear,
		isRelevant,
	} as ElementRow);

	(element?.units ?? []).forEach((unit: any) => {
		accumulator.push({
			id: unit.id,
			elementId: unit.elementId,
			name: unit.name,
			quantity: unit.quantity,
			quantityUnitOfMeasurement: unit.quantityUnitOfMeasurement,
			location: unit.location,
			constructionYear: unit.constructionYear,
			isRelevant: unit.isRelevant,
			material: unit.material,
		} as UnitRow);

		// console.log(manifestations);

		(unit?.manifestations ?? []).forEach((m: any) => {
			accumulator.push({
				id: m.id,
				unitId: m.unitId,
				name: m.name,
				quantity: m.quantity,
				quantityUnitOfMeasurement: m.quantityUnitOfMeasurement,
				location: m.location,
				constructionYear: m.constructionYear,
				material: m.material,
			} as ManifestationRow);
		});
	});

	return accumulator;
}, []);
