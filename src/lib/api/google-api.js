import { bucketName, datasetId, tableId, workLog } from '$env/static/private';
import { bigquery, storage } from './client.js';

import {
	sentenceUpdateQuery,
	weeklySentencesSelectQuery,
	repeatUpdateQuery,
	repeatInsertQuery,
	updateRepeatCounts,
	alsoTodaySelectQuery,
	workLogSelectQuery
} from './queries.js';

export async function updateWeeklySentences(boxes) {
	await boxes.forEach(async (el, i) => {
		const sentences = el.sentences;
		const box_id = el.box_id;

		const [job] = await bigquery.createQueryJob(
			await sentenceUpdateQuery(box_id, sentences, datasetId, tableId)
		);
	});
}
export async function updateWorkLog(box) {
	const { box_id, sentences } = box[0];
	const [job] = await bigquery.createQueryJob(
		await sentenceUpdateQuery(box_id, sentences, datasetId, workLog)
	);
}

export async function loadWeeklyRepeats() {
	const [job] = await bigquery.createQueryJob(await weeklySentencesSelectQuery(datasetId, tableId));
	const [rows] = await job.getQueryResults();

	return rows;
}
export async function loadAlsoTodayRepeats() {
	const [job] = await bigquery.createQueryJob(await alsoTodaySelectQuery(datasetId, tableId));
	const [rows] = await job.getQueryResults();

	return rows;
}

export async function loadWorkLog() {
	const [job] = await bigquery.createQueryJob(await workLogSelectQuery(datasetId, workLog));
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
			await new Promise((resolve) => setTimeout(resolve, pollIntervalMs));
		}
	} while (job.metadata.status.state !== 'DONE');

}
