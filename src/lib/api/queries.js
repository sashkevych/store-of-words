export async function createUpdateQuery(box_id, new_data, datasetId, tableId) {
	console.log(
		'UPDATE ' +
			`${datasetId}.${tableId}` +
			' SET sentences = ARRAY<STRUCT<text STRING, id INTEGER>> ' +
			new_data +
			' WHERE box_id = ' +
			`"${box_id}"`
	);
	return (
		'UPDATE ' +
		`${datasetId}.${tableId}` +
		' SET sentences = ARRAY<STRUCT<text STRING, id INTEGER>> ' +
		new_data +
		' WHERE box_id = ' +
		`"${box_id}"`
	);
}

export async function formatForSET(collection) {
	const input = JSON.stringify(collection);

	const output = input.replace(/{"text":"(.*?)","id":(\d+)}/g, '("$1",$2)').replace(/},{/g, '),(');

	return `${output}`;
}

export async function createSelectQuery(datasetId, tableId) {
	return 'SELECT * FROM ' + `${datasetId}.${tableId}` + ' WHERE repeat.type = "weekly"';
}

export async function createChangeRepeatQuery(box_id, new_data, datasetId, tableId) {
	return (
		'UPDATE ' +
		`${datasetId}.${tableId}` +
		' SET repeat = STRUCT<count INTEGER, date DATE, type STRING> ' +
		new_data +
		' WHERE box_id = ' +
		`"${box_id}"`
	);
}

export async function formatForRepeat(repeat) {
	return `(${repeat.count},"${repeat.date}","${repeat.type}")`;
}
