import { ComponentProps } from 'react';
import DecompositionTable from '../DecompositionTable';

const objectId = '9e267f06-6072-4db9-ba0e-e4adccafa0a9';

export const documents: ComponentProps<typeof DecompositionTable>[ 'rows' ] = [
	{
		id: 1,
		name: 'Hoofddraagconstructie',
		code: '147',
		location: 'Amsterdam Centrum',
		isStructural: false,
		isElectrical: false,
		constructionYear: 1979,
		isArchived: false,
		isRelevant: true,
		objectId,
		actionItems: {
			'edit-unit': {
				label: 'Bewerk element',
				onClick: () => {
					console.log('edit-unit');
				}
			},
			'add-unit': {
				label: 'Voeg bouwdeel toe',
				onClick: () => {
					console.log('add-unit');
				}
			},
			'generate-measures': {
				label: 'Genereer maatregelen',
				onClick: () => {
					console.log('Genereer maatregelen');
				}
			}
		}
	},
	{
		id: 2,
		name: 'Kerende constructie',
		code: '157',
		location: 'Amsterdam Centrum',
		isStructural: false,
		isElectrical: false,
		constructionYear: 1979,
		isArchived: false,
		isRelevant: true,
		objectId,
	},
	{
		id: 21,
		elementId: 2,
		name: 'Afdekplaat',
		code: '2049',
		location: 'Amsterdam Centrum',
		material: 'Cementbeton',
		quantity: 1,
		quantityUnitOfMeasurement: 'm2',
		constructionYear: 1979,
		isStructural: true,
		isElectrical: false,
		isRelevant: false,
		isArchived: false,
		objectId,
	},
	{
		id: 22,
		elementId: 2,
		unitId: 1,
		name: 'Aandrijving en bewegingswerk; elektromechanisch, Algemeen-1',
		code: '2049-1',
		location: 'Amsterdam Centrum',
		material: 'Beplanting',
		quantity: 5,
		quantityUnitOfMeasurement: 'pcs',
		constructionYear: 1998,
		isStructural: false,
		isElectrical: false,
		isArchived: false,
		objectId,
	},
	{
		id: 23,
		elementId: 2,
		unitId: 1,
		name: 'Aandrijving en bewegingswerk; elektromechanisch, Algemeen-1',
		code: '2049-2',
		location: 'Amsterdam Centrum',
		material: 'Beplanting',
		quantity: 5,
		quantityUnitOfMeasurement: 'pcs',
		constructionYear: 1998,
		isStructural: false,
		isElectrical: false,
		isArchived: false,
		objectId,
	},
	{
		id: 3,
		elementId: 2,
		name: 'Langsligger',
		code: '1328',
		location: 'Amsterdam Centrum',
		material: 'Beton',
		quantity: 3,
		quantityUnitOfMeasurement: 'm2',
		constructionYear: 1979,
		isStructural: true,
		isElectrical: false,
		isRelevant: false,
		isArchived: false,
		objectId,
	},
	{
		id: 4,
		elementId: 2,
		name: 'Leuningafwerking',
		code: '2145',
		location: 'Amsterdam Centrum',
		material: 'Onbekend',
		quantity: 5,
		quantityUnitOfMeasurement: 'pcs',
		constructionYear: 1980,
		isStructural: false,
		isElectrical: false,
		isRelevant: false,
		isArchived: false,
		objectId,
	},
	{
		id: 5,
		name: 'Brandblusinstallatie',
		code: '119',
		location: 'Amsterdam Centrum',
		isStructural: false,
		isElectrical: false,
		constructionYear: 1979,
		isArchived: false,
		isRelevant: true,
		objectId,
	}
];
