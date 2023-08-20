import { bucketName, datasetId, tableId } from '$env/static/private';

import { TransferManager } from '@google-cloud/storage';
import { bigquery, storage } from './client.js';

const metadata = {
	sourceFormat: 'NEWLINE_DELIMITED_JSON',
	schema: {
		fields: [
			{ name: 'name', type: 'STRING' },
			{ name: 'age', type: 'INTEGER' },
			{ name: 'sentence', type: 'STRING', mode: 'REPEATED' }
		]
	}
};

async function format(collection) {
	const input = JSON.stringify(collection)

	const output = input.replace(/{"text":"(.*?)","id":(\d+)}/g, '("$1",$2)').replace(/},{/g, '),(');

	console.log(`${output}`);

	return `${output}`; 
}

async function createQuery(box_id, new_data, datasetId, tableId) {
	return (
		'UPDATE ' +
		`${datasetId}.${tableId}` +
		' SET sentences = ARRAY<STRUCT<text STRING, id INTEGER>> ' +
		new_data +
		' WHERE box_id = ' +
		`"${box_id}"`
	);
}

export async function updateSentences(boxes) {
	await boxes.forEach(async (el, i) => {
		const sentences = el.sentences;
		const box_id = el.box_id;

		const [job] = await bigquery.createQueryJob(await createQuery(box_id, await format(sentences),datasetId,tableId));

		console.log(`Job ${job.id} started.`);
	});
}

export async function loadWeeklyRepeats() {
	const [job] = await bigquery.createQueryJob(
		'SELECT * FROM `nativ_table.all_schema` WHERE `repeat`.type = "weekly"'
	);
	// console.log(`Job ${job.id} started.`);

	const [rows] = await job.getQueryResults();

	return rows;
}
