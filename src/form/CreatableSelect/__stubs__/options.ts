export const options: { label: string; value: string }[] = [
	'Archeologisch (voor)onderzoek',
	'Archiefonderzoek',
	'Bomeninventarisatie en –onderzoek',
	'Bouwkundig onderzoek',
	'Flora- en faunaonderzoek',
	'(Geo)hydrologisch onderzoek',
	'Geotechnisch onderzoek',
	'Materiaalonderzoek',
	'Milieukundig onderzoek',
	'Onderzoek gevaarlijke stoffen',
	'Toets Constructieve Veiligheid',
	'Milieutechnisch onderzoek',
].map((label) => ({
	label,
	value: label.toLowerCase().replace(/\W/g, ''),
}));
