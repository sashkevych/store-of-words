export async function formatRepeat({ count, date, type }) {
	return `(${count},"${date}","${type}")`;
}
export async function formatSentences(collection) {
	const input = JSON.stringify(collection);
	const output = input.replace(/{"text":"(.*?)","id":(\d+)}/g, '("$1",$2)').replace(/},{/g, '),(');

	return `${output}`;
}

export async function sentenceUpdateQuery(box_id, new_data, datasetId, tableId) {
	return (
		'UPDATE ' +
		`${datasetId}.${tableId}` +
		' SET sentences = ARRAY<STRUCT<text STRING, id INTEGER>> ' +
		(await formatSentences(new_data)) +
		' WHERE box_id = ' +
		`"${box_id}"`
	);
}

export async function weeklySentencesSelectQuery(datasetId, tableId) {
	return 'SELECT * FROM ' + `${datasetId}.${tableId}` + ' WHERE repeat.type = "weekly"';
}

export async function repeatUpdateQuery({ box_id, repeat }, datasetId, tableId) {
	return (
		'UPDATE ' +
		`${datasetId}.${tableId}` +
		' SET repeat = STRUCT<count INTEGER, date DATE, type STRING> ' +
		(await formatRepeat(repeat)) +
		' WHERE box_id = ' +
		`"${box_id}"`
	);
}

export async function repeatInsertQuery(box, datasetId, tableId) {
	const { box_id, created_at, repeat, sentences } = box;
	return (
		'INSERT ' +
		`${datasetId}.${tableId}` +
		' (box_id, created_at, repeat, sentences) ' +
		`VALUES("${box_id}", "${created_at}", ${await formatRepeat(repeat)}, ${await formatSentences(
			sentences
		)})`
	);
}

export async function updateRepeatCounts(datasetId, tableId) {
	return (
		'UPDATE ' +
		`${datasetId}.${tableId} ` +
		'SET repeat.count = repeat.count + 1 ' +
		'WHERE repeat.type = "weekly"'
	);
}

export async function alsoTodaySelectQuery(datasetId, tableId) {
	return (
		'SELECT * FROM ' +
		`${datasetId}.${tableId}` +
		' WHERE repeat.type = "seven" AND repeat.date = ' +
		today()
	);
}

function today() {
	const DATE = new Date();

	let year = DATE.getFullYear();
	let month = DATE.getMonth() + 1;
	let day = DATE.getDate();

	return `"${year}-${month}-${day}"`;
}

export async function workLogSelectQuery(datasetId, tableId) {
	return 'SELECT * FROM ' + `${datasetId}.${tableId}` + ' WHERE type = "work-log"';
}
