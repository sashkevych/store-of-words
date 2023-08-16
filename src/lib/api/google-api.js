import { bigquery, storage } from './client.js';



export async function qwe() {
	const [job] = await bigquery.createQueryJob('SELECT * FROM `nativ_table.store-table`');
	const [rows] = await job.getQueryResults();

    return rows
}
