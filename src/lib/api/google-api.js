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


export async function loadWeeklyRepeats() {
	const [job] = await bigquery.createQueryJob(
		'SELECT * FROM `nativ_table.all_schema` WHERE `repeat`.type = "weekly"'
	);
	// console.log(`Job ${job.id} started.`);

	const [rows] = await job.getQueryResults();

	return rows
}

