import { bucketName, datasetId, tableId } from '$env/static/private';
import { bigquery, storage } from './client.js';

import {
	sentenceUpdateQuery,
	weeklySentencesSelectQuery,
	repeatUpdateQuery,
	repeatInsertQuery,
	updateRepeatCounts
} from './queries.js';

export async function updateWeeklySentences(boxes) {
	await boxes.forEach(async (el, i) => {
		const sentences = el.sentences;
		const box_id = el.box_id;

		const [job] = await bigquery.createQueryJob(
			await sentenceUpdateQuery(box_id, sentences, datasetId, tableId)
		);
		// console.log(`Job ${job.id} started.`);
	});
}

export async function loadWeeklyRepeats() {
	const [job] = await bigquery.createQueryJob(await weeklySentencesSelectQuery(datasetId, tableId));
	// console.log(`Job ${job.id} started.`);
	const [rows] = await job.getQueryResults();

	return rows;
}

export async function moveAll(new7DayBox, newInstance) {
	await bigquery.createQueryJob(await repeatUpdateQuery(new7DayBox, datasetId, tableId));
	const [job] = await bigquery.createQueryJob(await updateRepeatCounts(datasetId, tableId));
	await waitForJobCompletion(job.id);
	await bigquery.createQueryJob(await repeatInsertQuery(newInstance, datasetId, tableId));
}

async function waitForJobCompletion(jobId) {
	const pollIntervalMs = 500;

	let job;

	do {
		[job] = await bigquery.job(jobId).get();

		if (job.metadata.status.state !== 'DONE') {
			// console.log(`Job status: ${job.metadata.status.state}`);
			await new Promise((resolve) => setTimeout(resolve, pollIntervalMs));
		}
	} while (job.metadata.status.state !== 'DONE');

	// console.log('Job is DONE.', job.metadata.status.state);
}
