import { bucketName, datasetId, tableId } from '$env/static/private';
import { bigquery, storage } from './client.js';

import { formatForSET, createUpdateQuery, createSelectQuery, createChangeRepeatQuery,formatForRepeat } from './queries.js';

export async function updateSentences(boxes) {
	await boxes.forEach(async (el, i) => {
		const sentences = el.sentences;
		const box_id = el.box_id;

		const [job] = await bigquery.createQueryJob(
			await createUpdateQuery(box_id, await formatForSET(sentences), datasetId, tableId)
		);
		console.log(`Job ${job.id} started.`);
	});
}

export async function loadWeeklyRepeats() {
	const [job] = await bigquery.createQueryJob(await createSelectQuery(datasetId, tableId));

	// console.log(`Job ${job.id} started.`);
	const [rows] = await job.getQueryResults();

	return rows;
}

export async function moveAll(new7DayBox, newInstance) {
	// const [job] = await bigquery.createQueryJob(
		let res =  await createChangeRepeatQuery(new7DayBox.box_id,await formatForRepeat(new7DayBox.repeat),datasetId,tableId)
		console.log(res);
	// );
	// console.log(`Job ${job.id} started.`);
}
